import { Router } from "express";
import upload from "../config/multer.js";
import {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsByEmail,
    updateProduct,
    deleteProduct
} from "../controllers/product.controllers.js";

const router = Router();

// Routes
router.route("/")
    .post(upload.single('image'), createProduct)
    .get(getAllProducts);

router.route("/:productId")
    .get(getProductById)
    .put(upload.single('image'), updateProduct)
    .delete(deleteProduct);

router.route("/user/:userEmail")
    .get(getProductsByEmail);

export default router;