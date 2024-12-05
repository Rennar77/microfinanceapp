const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

// Create a transaction
router.post("/", transactionController.createTransaction);

// Get all transactions (Admin only)
router.get("/", transactionController.getAllTransactions);

// Get transactions by user
router.get("/:userId", transactionController.getTransactionsByUser);

module.exports = router;
