const express = require("express");
const router = express.Router();
const repaymentController = require("../controllers/repaymentController");

// Update repayment status
router.patch("/:loanId", repaymentController.updateRepaymentStatus);

module.exports = router;
