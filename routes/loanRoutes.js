// loanRoutes.js
const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");

router.post("/apply", loanController.applyForLoan);
router.get("/", loanController.getAllLoans);
router.put("/:id", loanController.updateLoanStatus);

module.exports = router;
