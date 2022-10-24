const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
const { MONGOURI } = process.env;

//Routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const cors = require("cors");

//Init Middleware
app.use(morgan("dev"));
app.use(express.json({ extended: false }));

//Connect to the database
try {
  mongoose.connect(MONGOURI, { useNewUrlParser: true });
  console.log("MongoDB Connected...");
} catch (err) {
  console.error(err.message);
  // Exit process with failure
  process.exit(1);
}

app.use(cors());

//Routes which should handle requests
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/favicon.ico", express.static("/img/favicon.ico"));
app.use("/", (req, res) => res.send("Welcome to My Gaming Library"));

// Error 404
app.use((req, res, next) => {
  const error = new Error("Not Found (404)");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
