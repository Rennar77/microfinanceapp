// loanController.js
exports.applyForLoan = (req, res) => {
    const { borrowerId, amount, reason } = req.body;
  
    if (!borrowerId || !amount || !reason) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    // Mock loan data
    const loan = {
      id: Math.floor(Math.random() * 1000), // Random ID for now
      borrowerId,
      amount,
      reason,
      status: "Pending",
    };
  
    res.status(201).json({
      message: "Loan application submitted successfully!",
      loan,
    });
  };
  
  exports.getAllLoans = (req, res) => {
    // Mock loans data
    const loans = [
      {
        id: 1,
        borrowerId: 1,
        amount: 50000,
        reason: "Business expansion",
        status: "Pending",
      },
      {
        id: 2,
        borrowerId: 2,
        amount: 30000,
        reason: "Farming equipment",
        status: "Approved",
      },
    ];
  
    res.status(200).json(loans);
  };
  
  exports.updateLoanStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }
  
    // Mock updated loan
    const updatedLoan = {
      id,
      borrowerId: 1,
      amount: 50000,
      reason: "Business expansion",
      status,
    };
  
    res.status(200).json({
      message: "Loan status updated successfully!",
      loan: updatedLoan,
    });
  };
  