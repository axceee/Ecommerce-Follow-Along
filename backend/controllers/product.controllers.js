import { Product } from "../models/product.models.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";

const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        description,
        price,
        category,
        stockQuantity,
        userEmail
    } = req.body;

    // Validation
    if (
        [name, description, price, category, stockQuantity, userEmail].some(
            field => field?.trim() === "" || field === undefined
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Upload image to Cloudinary if file exists
    let imageUrl = null;
    if (req.file) {
        imageUrl = await uploadOnCloudinary(req.file.path);
        if (!imageUrl) {
            throw new ApiError(400, "Error uploading image");
        }
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
        category,
        stockQuantity
    } = req.body;

    // Validation
    if (
        [name, description, price, category, stockQuantity].some(
            field => field?.trim() === "" || field === undefined
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Upload new image to Cloudinary if file exists
    let imageUrl;
    if (req.file) {
        imageUrl = await uploadOnCloudinary(req.file.path);
        if (!imageUrl) {
            throw new ApiError(400, "Error uploading image");
        }
    }

    const updateData = {
        name,
        description,
        price,
        category,
        stockQuantity
    };

    // Only add imageUrl to update if a new image was uploaded
    if (imageUrl) {
        updateData.imageUrl = imageUrl;
    }

    const product = await Product.findByIdAndUpdate(
        productId,
        { $set: updateData },
        { new: true }
    );

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product updated successfully")
    );
});

const deleteProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    
    const product = await Product.findByIdAndDelete(productId);
    
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Product deleted successfully")
    );
});

export {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsByEmail,
    updateProduct,
    deleteProduct
};