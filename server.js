const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const loanRoutes = require("./routes/loanRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const repaymentRoutes = require("./routes/repaymentRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/loans", loanRoutes); // Loan routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/repayments", repaymentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send("Microfinance App Backend is Running!");
});
const sequelize = require("./config/database");
const Loan = require("./models/Loan"); // Import the Loan model

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
