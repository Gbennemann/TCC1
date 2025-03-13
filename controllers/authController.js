import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendConfirmationEmail } from '../services/emailService.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, confirmationCode });
    await user.save();
    
    await sendConfirmationEmail(email, confirmationCode);
    res.status(201).json({ message: '✅ User registered. Check email for code.' });
  } catch (err) {
    res.status(500).json({ error: '❌ Registration failed' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: '❌ Invalid username or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: '❌ Invalid username or password' });

    if (!user.isVerified) return res.status(400).json({ error: '❌ User not verified' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: '❌ Login failed' });
  }
};

export const verify = async (req, res) => {
  const { email, confirmationCode } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email, confirmationCode },
      { isVerified: true },
      { new: true }
    );
    if (!user) return res.status(400).json({ error: '❌ Invalid confirmation code' });

    res.status(200).json({ message: '✅ User verified successfully' });
  } catch (err) {
    res.status(500).json({ error: '❌ Verification failed' });
  }
};