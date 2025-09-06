import nodemailer from "nodemailer";
import User from "../models/User.js";
 import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
export const sendVerificationCode = async (email, name) => {
  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // Find or create user
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({
      name,
      email,
      code,
      codeExpires: Date.now() + 10 * 60 * 1000, // 10 mins
    });
  } else {
    user.code = code;
    user.codeExpires = Date.now() + 10 * 60 * 1000;
    await user.save();
  }

  // Send code via email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Verification Code",
    text: `Hello ${name}, your verification code is ${code}`,
  });

  return code; 
};


export const verifyCodeLogin = async (user, code) => {
  if (user.code !== code || user.codeExpires < Date.now()) {
    throw new Error("Invalid or expired code");
  }
const password = Math.random().toString(36).slice(-10);

  user.isVerified = true;
  user.code = null;
  user.password = await bcrypt.hash(password, 10); // Hash the password
  user.codeExpires = null;
  await user.save();

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { token, user };
};
