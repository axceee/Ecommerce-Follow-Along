import express from 'express';
import { createUser, getUserById, loginUser } from '../controllers/user.controllers.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/auth/register', upload.single('profileImage'), createUser);
router.post('/auth/login', loginUser);

router.get('/users/:id', getUserById);

export default router;