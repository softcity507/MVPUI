  import { sendVerificationCode, verifyCodeLogin } from "../Middleware/verification.js";
import User from "../models/User.js";
 
  
export const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // create if not exist
      user = await User.create({ name, email });
    }

    // always send verification code (new or existing)
    await sendVerificationCode(email, name || user.name);

    return res.status(200).json({ message: "Please see your email", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


    export const loginUser = async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const { token } = await verifyCodeLogin(user, code);

        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };