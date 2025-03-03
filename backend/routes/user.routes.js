import express from "express";
import { findUser, registerUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.post('/register',registerUser)
router.get('/find',findUser)

export default router