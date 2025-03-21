import express from 'express';
import { createUser, getUserById, loginUser, addToCart } from '../controllers/user.controllers.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/register', upload.single('profileImage'), createUser);
router.post('/login', loginUser);

router.get('/users/:id', getUserById);

// Cart routes
router.post('/cart/add', addToCart);

export default router;