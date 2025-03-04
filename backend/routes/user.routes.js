import express from 'express';
import { createUser, getUserById } from '../controllers/user.controllers.js';
import upload from '../config/multer.js';

const router = express.Router();

// Auth routes
router.post('/auth/register', upload.single('profileImage'), createUser);
router.post('/auth/login', (req, res) => {
  // Login will be implemented in future milestone
  res.status(501).json({ message: 'Not implemented yet' });
});

// User routes
router.get('/users/:id', getUserById);

export default router;