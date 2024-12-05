// authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Mock user database (replace with real DB integration later)
const users = [];

// Signup route
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to mock database
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: "User signed up successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Export the router
module.exports = router;
