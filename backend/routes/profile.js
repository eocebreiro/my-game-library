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

// @route   POST /profile/game
// @desc    Add game to profile
// @access  Private
router.post(
  "/game",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("status", "Status is required").not().isEmpty(),
    ],
  ],
  profileController.addGame
);

// @route   DELETE /profile/game/:game_id
// @desc    Delete game from profile
// @access  Private
router.delete("/game/:game_id", auth, profileController.deleteGame);

module.exports = router;
