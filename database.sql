create database microfinance;
USE microfinance;
CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('User', 'Admin') DEFAULT 'User',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE loans (
    loanId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected', 'Disbursed', 'Completed') DEFAULT 'Pending',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(userId)
);
CREATE TABLE transactions (
    transactionId INT AUTO_INCREMENT PRIMARY KEY,
    loanId INT NOT NULL,
    userId INT NOT NULL,
    type ENUM('Disbursement', 'Repayment') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (loanId) REFERENCES loans(loanId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);
