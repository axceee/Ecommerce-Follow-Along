import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    getProductById
} from "../controllers/product.controllers.js";

const router = Router();

// Routes
router.route("/").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/:productId").get(getProductById);

export default router;