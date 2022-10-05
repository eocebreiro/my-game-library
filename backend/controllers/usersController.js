const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();

const { JWTSECRET } = process.env;

const User = require("../models/User");
const Profile = require("../models/Profile");

exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exits" }] });
    }

    // Create a new user
    user = new User({
      name,
      email,
      password,
    });

    // Create user profile
    profile = new Profile({
      user: user.id,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to the database
    await user.save();
    await profile.save();

    // Return jsonwebtoken (login user)
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, JWTSECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
