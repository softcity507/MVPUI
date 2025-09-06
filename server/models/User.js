import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,  
  code: String,  
  codeExpires: Date,
  isVerified: { type: Boolean, default: false },
});

 const User = mongoose.model("Usermvp", userSchema);
export default User;