const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const { check } = require("express-validator");

const usersController = require("../controllers/usersController");

// @route   GET /profile/me
// @desc    Get current user profile
// @access  Private
router.post("/", auth, profileController.getProfile);

module.exports = router;
