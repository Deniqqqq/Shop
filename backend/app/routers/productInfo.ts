import express from "express";
import { productInfoController } from "../controllers/index";
import { productInfoValidation } from "../validations/index";
import validationHandler from "../utils/validationHandler";

const router = express.Router();

// Routes
router.get("/productInfo", productInfoController.readAllProductInfo);
router.get("/productInfo/:id", productInfoController.readProductInfo);
router.post(
  "/productInfo",
  productInfoValidation.create,
  validationHandler,
  productInfoController.createProductInfo
);
router.patch(
  "/productInfo/:id",
  productInfoValidation.update,
  validationHandler,
  productInfoController.updateProductInfo
);
router.delete("/productInfo/:id", productInfoController.deleteProductInfo);

export default router;
