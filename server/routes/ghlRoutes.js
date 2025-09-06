import express from "express";
import axios from "axios";

const router = express.Router();

// Redirect user to GHL authorization page
router.get("/auth", (req, res) => {
  const redirectUri = process.env.GHL_REDIRECT_URI;
  const clientId = process.env.GHL_CLIENT_ID;
  const authUrl = `https://marketplace.gohighlevel.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  res.redirect(authUrl);
});

// Callback to exchange code for tokens
router.get("/callback", 
    
  async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post("https://api.msgsndr.com/oauth/token", {
      grant_type: "authorization_code",
      code,
      client_id: process.env.GHL_CLIENT_ID,
      client_secret: process.env.GHL_CLIENT_SECRET,
      redirect_uri: process.env.GHL_REDIRECT_URI,
    });

    // Save tokens securely (DB)
    // Example: MongoDB - User.findByIdAndUpdate(userId, { ghlTokens: response.data })

    res.json({ success: true, tokens: response.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
