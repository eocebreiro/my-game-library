const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const { check } = require("express-validator");

const userController = require("../controllers/userController");

// @route   POST /user
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.registerUser
);

// @route   DELETE /user/
// @desc    Delete a user
// @access  Private
router.delete("/", auth, userController.deleteUser);

module.exports = router;
