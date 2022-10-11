const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  gameLibrary: [
    {
      name: {
        type: String,
        required: true,
      },
      compilation: {
        type: String,
        required: true,
      },
      system: {
        type: String,
      },
      status: {
        type: String,
        required: true,
      },
      ownership: {
        type: String,
        required: true,
      },
      hours: {
        type: Number,
        defualt: null,
      },
      rating: {
        type: Number,
        defualt: null,
      },
      review: {
        type: String,
        default: null,
      },
      comments: {
        type: String,
        default: null,
      },
    },
  ],

  date: { type: Date, defualt: Date.now },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
