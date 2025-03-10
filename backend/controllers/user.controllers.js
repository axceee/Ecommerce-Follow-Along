import User from '../models/user.models.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import bcrypt from 'bcrypt';

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Use try-catch for bcrypt comparison
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }
    } catch (bcryptError) {
      console.error('Password comparison error:', bcryptError);
      return res.status(500).json({
        success: false,
        message: 'Error during login'
      });
    }

    const userWithoutPassword = {
      _id: user._id,
      email: user.email,
      name: user.name || '',
      profileImage: user.profileImage || ''
    };

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      data: userWithoutPassword
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error during login',
      error: error.message
    });
  }
};

// Register a new user
export const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Hash password before creating user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hashedPassword,
      name: name || ''
    });

    const userWithoutPassword = {
      _id: user._id,
      email: user.email,
      name: user.name || ''
    };

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: userWithoutPassword
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error during registration',
      error: error.message
    });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error fetching user',
      error: error.message
    });
  }
};