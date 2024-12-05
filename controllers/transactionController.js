const db = require("../config/database");

// Create a transaction
exports.createTransaction = (req, res) => {
  const { loanId, userId, type, amount } = req.body;

  if (!loanId || !userId || !type || !amount) {
    return res.status(400).json({ message: "All fields are required: loanId, userId, type, amount." });
  }

  if (type !== "Disbursement" && type !== "Repayment") {
    return res.status(400).json({ message: "Invalid transaction type. Use 'Disbursement' or 'Repayment'." });
  }

  const query = "INSERT INTO transactions (loanId, userId, type, amount, createdAt) VALUES (?, ?, ?, ?, NOW())";
  db.query(query, [loanId, userId, type, amount], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error creating transaction", error: err });
    }
    res.status(201).json({ message: "Transaction created successfully", transactionId: result.insertId });
  });
};

// Get all transactions (Admin only)
exports.getAllTransactions = (req, res) => {
  const query = "SELECT * FROM transactions";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching transactions", error: err });
    }
    res.status(200).json(results);
  });
};

// Get transactions by user
exports.getTransactionsByUser = (req, res) => {
  const { userId } = req.params;

  const query = "SELECT * FROM transactions WHERE userId = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching user transactions", error: err });
    }
    res.status(200).json(results);
  });
};
