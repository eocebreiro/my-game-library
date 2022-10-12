const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const { check } = require("express-validator");

const profileController = require("../controllers/profileController");

// @route   GET /profile/
// @desc    Get current user profile
// @access  Private
router.get("/", auth, profileController.getProfile);

// @route   PUT /profile
// @desc    Update a user
// @access  Private
router.put(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  profileController.updateProfile
);

// @route   POST /profile/game
// @desc    Add game to profile
// @access  Private
router.post(
  "/game",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("system", "System is required").not().isEmpty(),
      check("status", "Status is required").not().isEmpty(),
      check("ownership", "Error with the value of status and ownership").custom(
        (value, { req }) => {
          if (
            req.body.status === "Unplayed" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed" ||
            req.body.status === "Backlog"
          ) {
            if (value !== null) {
              return true;
            } else return false;
          } else {
            if (value === null) {
              return true;
            }
          }
        }
      ),
      check("hours", "Error with the value of status and hours").custom(
        (value, { req }) => {
          if (
            req.body.status === "Unplayed" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed"
          ) {
            if (value !== null) {
              return true;
            } else return false;
          } else {
            if (value === null) {
              return true;
            }
          }
        }
      ),
      check("rating", "Error with the value of status and rating").custom(
        (value, { req }) => {
          if (
            req.body.status === "Unplayed" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed"
          ) {
            if (value !== null) {
              return true;
            } else return false;
          } else {
            if (value === null) {
              return true;
            }
          }
        }
      ),
      check("review", "Error with the value of status and review").custom(
        (value, { req }) => {
          if (
            req.body.status === "Unplayed" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed"
          ) {
            return true;
          } else {
            if (value === null) {
              return true;
            } else return false;
          }
        }
      ),
    ],
  ],
  profileController.addGame
);

// @route   GET /profile/game/:game_id
// @desc    Add game to profile
// @access  Private
router.get("/game/:game_id", auth, profileController.getGame);

// @route   PUT /profile/game/:game_id
// @desc    Update game from profile
// @access  Private
router.put("/game/:game_id", auth, profileController.updateGame);

// @route   DELETE /profile/game/:game_id
// @desc    Delete game from profile
// @access  Private
router.delete("/game/:game_id", auth, profileController.deleteGame);

module.exports = router;
