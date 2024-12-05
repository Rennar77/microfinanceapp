const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const loanRoutes = require("./routes/loanRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/loans", loanRoutes); // Loan routes

app.get("/", (req, res) => {
    res.send("Microfinance App Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
