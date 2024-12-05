const Loan = require("../models/Loan");

// Update repayment status
exports.updateRepaymentStatus = async (req, res) => {
  const { loanId } = req.params;
  const { repaymentStatus } = req.body;

  if (!["In Progress", "Completed"].includes(repaymentStatus)) {
    return res.status(400).json({ message: "Invalid repayment status" });
  }

  try {
    const loan = await Loan.findByPk(loanId);

    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    loan.repaymentStatus = repaymentStatus;
    await loan.save();

    res.status(200).json({ message: "Repayment status updated successfully", loan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating repayment status", error });
  }
};

module.exports = {
  updateRepaymentStatus,
};
