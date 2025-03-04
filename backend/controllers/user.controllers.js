import User from '../models/user.models';
import upload from '../config/multer';

// Create a new user with profile image
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const profileImage = req.file ? req.file.path : null;
    const user = new User({ name, email, password, profileImage });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};