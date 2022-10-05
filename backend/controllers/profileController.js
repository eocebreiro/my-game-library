const { validationResult } = require("express-validator");
const Profile = require("../models/Profile");
const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const profile = await await Profile.findOne({ user: req.user.id }).populate(
      "user",
      { name: 1 }
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateProfile = async (req, res) => {};

exports.addGame = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, system, status, hours, rating, review, comment } = req.body;

  const newGame = { name, system, status, hours, rating, review, comment };

  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.gameLibrary.push(newGame);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getGame = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get the index of the game
    const gameIndex = profile.gameLibrary
      .map((game) => game.id)
      .indexOf(req.params.game_id);

    res.json(profile.gameLibrary[gameIndex]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateGame = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, system, status, hours, rating, review, comment } = req.body;

  const newGame = { name, system, status, hours, rating, review, comment };

  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Delete old entry
    const removeIndex = profile.gameLibrary
      .map((game) => game.id)
      .indexOf(req.params.game_id);

    profile.gameLibrary.splice(removeIndex, 1);

    // Add new entry
    profile.gameLibrary.push(newGame);

    // Save
    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get the index of the game that will be deleted
    const removeIndex = profile.gameLibrary
      .map((game) => game.id)
      .indexOf(req.params.game_id);

    profile.gameLibrary.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
