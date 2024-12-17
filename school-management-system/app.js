const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");
const libraryRoutes = require("./routes/libraryRoutes");
const feeRoutes = require("./routes/feeRoutes");

// enable cors
app.use(cors());
// Middleware
app.use(express.json());

// mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


// Routes

// auth routes
app.use("/api/auth", authRoutes);

// user routes
app.use("/api/user", userRoutes);

// student routes
app.use("/api/student", studentRoutes);

// library history routes
app.use("/api/library", libraryRoutes);

// fee history routes
app.use('/api/fees',feeRoutes)

// server connection
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
