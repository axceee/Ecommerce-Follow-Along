import { Product } from "../models/product.models.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        description,
        price,
        imageUrl,
        category,
        stockQuantity,
        userEmail
    } = req.body;

    // Validation
    if (
        [name, description, price, imageUrl, category, stockQuantity, userEmail].some(
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
        stockQuantity,
        userEmail
    });

    return res.status(201).json(
        new ApiResponse(201, product, "Product created successfully")
    );
});

const getProductsByEmail = asyncHandler(async (req, res) => {
    const { userEmail } = req.params;
    
    const products = await Product.find({ userEmail });
    
    return res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
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

const updateProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;
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

    const product = await Product.findByIdAndUpdate(
        productId,
        {
            $set: {
                name,
                description,
                price,
                imageUrl,
                category,
                stockQuantity
            }
        },
        { new: true }
    );

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product updated successfully")
    );
});

export {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsByEmail,
    updateProduct
};