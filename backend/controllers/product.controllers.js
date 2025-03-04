import { Product } from "../models/product.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        description,
        price,
        imageUrl,
        category,
        stockQuantity
    } = req.body;

    // Validation
    if (
        [name, description, price, imageUrl, category, stockQuantity].some(
            field => field?.trim() === "" || field === undefined
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Create product
    const product = await Product.create({
        name,
        description,
        price,
        imageUrl,
        category,
        stockQuantity
    });

    return res.status(201).json(
        new ApiResponse(201, product, "Product created successfully")
    );
});

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    );
});

const getProductById = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    
    const product = await Product.findById(productId);
    
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product fetched successfully")
    );
});

export {
    createProduct,
    getAllProducts,
    getProductById
};