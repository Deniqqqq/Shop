import express from "express";
import { categoryController } from "../controllers/index";
import { categoryValidation } from "../validations/index";
import validationHandler from "../utils/validationHandler";

const router = express.Router();

// Routes
router.get("/category", categoryController.readAllCategory);
router.get("/category/:id", categoryController.readCategory);
router.post(
  "/category",
  categoryValidation.create,
  validationHandler,
  categoryController.createCategory
);
router.patch(
  "/category/:id",
  categoryValidation.update,
  validationHandler,
  categoryController.updateCategory
);
router.delete("/category/:id", categoryController.deleteCategory);

export default router;
