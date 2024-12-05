const Loan = require("../models/Loan"); // Loan model

// Approve or reject a loan
exports.updateLoanStatus = async (req, res) => {
  const { loanId } = req.params;
  const { status } = req.body;

  if (!["Approved", "Rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid loan status" });
  }

  try {
    const loan = await Loan.findByPk(loanId);

    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    loan.status = status;
    await loan.save();

    res.status(200).json({ message: `Loan ${status.toLowerCase()} successfully`, loan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating loan status", error });
  }
};

// Get all loans (admin only)
exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll();
    res.status(200).json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching loans", error });
  }
};

module.exports = {
  updateLoanStatus,
  getAllLoans,
};
