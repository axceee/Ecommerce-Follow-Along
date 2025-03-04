import express from 'express';
import { createUser, getUserById } from '../controllers/user.controllers';
import upload from '../config/multer';

const router = express.Router();

// Create a new user
router.post('/users', upload.single('profileImage'), createUser);

// Get user by ID
router.get('/users/:id', getUserById);

export default router;