import express from "express";
import { productController } from "../controllers/index";
import { productValidation } from "../validations/index";
import validationHandler from "../utils/validationHandler";

const router = express.Router();

// Routes
router.get("/product", productController.readAllProduct);
router.get("/product/:id", productController.readProduct);
router.post(
  "/product",
  productValidation.create,
  validationHandler,
  productController.createProduct
);
router.patch(
  "/product/:id",
  productValidation.update,
  validationHandler,
  productController.updateProduct
);
router.delete("/product/:id", productController.deleteProduct);

export default router;
