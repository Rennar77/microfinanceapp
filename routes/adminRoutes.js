const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Approve or reject loan
router.patch("/loan-status/:loanId", adminController.updateLoanStatus);

// Get all loans
router.get("/loans", adminController.getAllLoans);

module.exports = router;
