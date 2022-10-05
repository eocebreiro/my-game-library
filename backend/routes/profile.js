const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const { check } = require("express-validator");

const profileController = require("../controllers/profileController");

// @route   GET /profile/me
// @desc    Get current user profile
// @access  Private
router.get("/me", auth, profileController.getProfile);

// @route   POST /profile/update
// @desc    Update a user profile
// @access  Private
router.post("/update", auth, profileController.updateProfile);

module.exports = router;
