import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  isVerified: { type: Boolean, default: false },
  confirmationCode: String,
}, { timestamps: true });

export default mongoose.model('User', userSchema);