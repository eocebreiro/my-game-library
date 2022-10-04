const Profile = require("../models/Profile");
const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
