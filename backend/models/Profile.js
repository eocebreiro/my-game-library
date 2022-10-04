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
        required,
      },
      system: {
        type: String,
      },
      status: {
        type: String,
        required,
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
      comment: {
        type: String,
        default: null,
      },
    },
  ],

  date: { type: Date, defualt: Date.now },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
