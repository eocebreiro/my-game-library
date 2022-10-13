const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const { check, body } = require("express-validator");

const profileController = require("../controllers/profileController");

// @route   GET /profile/
// @desc    Get current user profile
// @access  Private
router.get("/me", auth, profileController.getProfile);

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
      body("name").exists().withMessage("Name is required"),
      body("compilation").optional(),
      body("system").exists().withMessage("System is required"),
      body("status")
        .exists()
        .withMessage("Status is required")
        .isIn(["Unfinished", "Beaten", "Completed", "Backlog", "Wishlist"])
        .withMessage("Status does contain invalid value"),
      body("ownership")
        .if((value, { req }) => {
          return (
            req.body.status === "Unfinished" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed" ||
            req.body.status === "Backlog"
          );
        })
        .not()
        .isEmpty()
        .withMessage("Ownership is required"),
      body("hours")
        .if((value, { req }) => {
          return (
            req.body.status === "Unfinished" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed"
          );
        })
        .not()
        .isEmpty()
        .withMessage("Hours is required")
        .isFloat({ min: 0 })
        .withMessage("Hours must be a postive number"),
      body("rating")
        .if((value, { req }) => {
          return (
            req.body.status === "Unfinished" ||
            req.body.status === "Beaten" ||
            req.body.status === "Completed"
          );
        })
        .not()
        .isEmpty()
        .withMessage("Rating is required")
        .isFloat({ min: 0, max: 10 })
        .withMessage("Rating must be a number between 0 - 10"),
      body("review")
        .if((value, { req }) => {
          return (
            req.body.status !== "Unfinished" ||
            req.body.status !== "Beaten" ||
            req.body.status !== "Completed"
          );
        })
        .isEmpty()
        .withMessage(
          "There should be no review if you haven't played the game"
        ),
      body("comments").optional(),
    ],
  ],
  profileController.addGame
);

// @route   GET /profile/game/:game_id
// @desc    Get a game from the user library
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
