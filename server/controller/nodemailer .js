import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import  User from "../models/User.js";
 
const router = express.Router();

 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

 router.post("/auth", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      if (!password) {
        return res.status(400).json({ message: "Password required for first-time registration." });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await User.create({ email, name, password: hashedPassword });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    const loginUrl = `${process.env.FRONTEND_URL}/auto-login?token=${token}`;

     await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Your Login Link",
      html: `
        <p>Hello ${user.name || "User"},</p>
        <p>Click below to login:</p>
        <a href="${loginUrl}">${loginUrl}</a>
        <p>This link is valid for 15 minutes only.</p>
      `,
    });

    res.json({ message: "Login link sent to your email." });
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

 router.get("/auto-login", async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).send("User not found");

     const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.redirect(`${process.env.FRONTEND_URL}/dashboard?auth=${authToken}`);
  } catch (err) {
    console.error("Token Error:", err);
    res.status(401).send("Invalid or expired link");
  }
});

export default router;
