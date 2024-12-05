const Loan = require("../models/Loan"); // Loan model

// Apply for a loan
exports.applyLoan = async (req, res) => {
  const { userId, loanAmount, loanTerm, interestRate } = req.body;

  if (!userId || !loanAmount || !loanTerm || !interestRate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newLoan = await Loan.create({
      userId,
      loanAmount,
      loanTerm,
      interestRate,
      status: "Pending",
      repaymentStatus: "Not Started",
    });

    res.status(201).json({ message: "Loan application successful", loan: newLoan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error applying for loan", error });
  }
};

// Get loans by user
exports.getLoansByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const loans = await Loan.findAll({ where: { userId } });

    if (loans.length === 0) {
      return res.status(404).json({ message: "No loans found for this user" });
    }

    res.status(200).json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching loans", error });
  }
};

module.exports = {
  applyLoan,
  getAllLoans,
  getLoansByUser,
  updateLoanStatus,
  updateRepaymentStatus,
};

