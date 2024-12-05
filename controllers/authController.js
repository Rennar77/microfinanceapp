const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require("../mockDB");

exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: "Email already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add user to mock database
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword,
        role, // 'lender' or 'borrower'
    };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully!", user: newUser });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Find user
    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful!", token });
};
