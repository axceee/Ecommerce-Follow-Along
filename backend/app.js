import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err?.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
      errors: Object.values(err.errors).map(error => error.message)
    });
  }
  
  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || []
  });
});

// Export the app

export default app
