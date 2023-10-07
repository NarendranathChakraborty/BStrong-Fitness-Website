const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(cookieParser());

// Connect to MongoDB
mongoose.connect("mongodb+srv://321swaroop0062:Sambhaji2@cluster0.xk2sux7.mongodb.net/");

// Middleware to verify user with JWT token
const verifyUser = (req, res, next) => {  
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("Not admin");
        }
      }
    });
  }
};

// Route for accessing the dashboard (requires admin role)
app.get("/dashboard", verifyUser, (req, res) => {
  res.json("Success");
});

// Route for user registration
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

// Route for user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign(
              { email: user.email, role: user.role },
              "jwt-secret-key",
              { expiresIn: "1d" }
            );
            res.cookie("token", token);
            return res.json({ Status: "Success", role: user.role });
          } else {
            return res.json("The password is incorrect");
          }
        });
      } else {
        return res.json("No record exists");
      }
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
