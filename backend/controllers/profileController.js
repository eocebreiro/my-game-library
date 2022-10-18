const { validationResult } = require("express-validator");
const Profile = require("../models/Profile");
const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ profile: req.user.id }).populate(
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

exports.updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;
  console.log(req.user.id);
  try {
    await User.updateOne({ _id: req.user.id }, { $set: { name: name } });

    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      { name: 1 }
    );

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.addGame = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, system, status, ownership, hours, rating, review, comments } =
    req.body;

  const newGame = {
    name,
    system,
    status,
    ownership,
    hours,
    rating,
    review,
    comments,
  };
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      { name: 1 }
    );

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
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      { name: 1 }
    );

    // Get the index of the game
    const gameIndex = profile.gameLibrary
      .map((game) => game.id)
      .indexOf(req.params.game_id);

    if (gameIndex < 0) {
      return res.status(400).json({ errors: [{ msg: "Game doesn't exist" }] });
    }

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
  const { name, system, ownership, status, hours, rating, review, comments } =
    req.body;

  const newGame = {
    name,
    system,
    ownership,
    status,
    hours,
    rating,
    review,
    comments,
  };

  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      { name: 1 }
    );

    // Delete old entry
    const removeIndex = profile.gameLibrary
      .map((game) => game.id)
      .indexOf(req.params.game_id);

    // Check to see if game is in the user's library
    if (removeIndex < 0) {
      return res.status(400).json({ errors: [{ msg: "Game doesn't exist" }] });
    }

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
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      { name: 1 }
    );

    // Get the index of the game that will be deleted
    const removeIndex = profile.gameLibrary
      .map((game) => game.id)
      .indexOf(req.params.game_id);
    if (removeIndex < 0) {
      return res.status(400).json({ errors: [{ msg: "Game doesn't exist" }] });
    }

    profile.gameLibrary.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
