const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");

// Apply for a loan
router.post("/apply", loanController.applyLoan);

// Get all loans (Admin only)
router.get("/", loanController.getAllLoans);

// Get loans by user
router.get("/:userId", loanController.getLoansByUser);

// Approve/Reject loan (Admin only)
router.patch("/:loanId", loanController.updateLoanStatus);

// Update repayment status
router.patch("/repayment/:loanId", loanController.updateRepaymentStatus);

module.exports = router;
