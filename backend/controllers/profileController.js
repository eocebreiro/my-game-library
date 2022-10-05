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
