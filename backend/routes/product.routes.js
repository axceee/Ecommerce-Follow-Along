import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsByEmail,
    updateProduct
} from "../controllers/product.controllers.js";

const router = Router();

// Routes
router.route("/").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/:productId").get(getProductById).put(updateProduct);
router.route("/user/:userEmail").get(getProductsByEmail);

export default router;