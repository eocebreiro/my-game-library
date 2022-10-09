const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check } = require("express-validator");

const authController = require("../controllers/authController");

// @route   GET api/auth
// @desc    Test Route
// @access  Public
router.get("/", auth, authController.test);

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  authController.authenticate
);

module.exports = router;
