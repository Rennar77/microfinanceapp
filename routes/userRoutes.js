const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Get user profile
router.get("/:id", userController.getUserProfile);

// Update user details
router.patch("/:id", userController.updateUser);

module.exports = router;
