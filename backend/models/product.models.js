import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: [true, "User email is required"],
        trim: true
    },
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        minLength: [3, "Product name must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
        trim: true,
        minLength: [10, "Description must be at least 10 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"]
    },
    imageUrl: {
        type: String,
        required: [true, "Product image URL is required"]
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
        trim: true
    },
    stockQuantity: {
        type: Number,
        required: [true, "Stock quantity is required"],
        min: [0, "Stock quantity cannot be negative"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

export const Product = mongoose.model("Product", productSchema);