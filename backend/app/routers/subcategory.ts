import express from "express";
import { subcategoryController } from "../controllers/index";
import { subcategoryValidation } from "../validations/index";
import validationHandler from "../utils/validationHandler";

const router = express.Router();

// Routes
router.get("/subcategory", subcategoryController.readAllSubcategory);
router.get("/subcategory/:id", subcategoryController.readSubcategory);
router.post(
  "/subcategory",
  subcategoryValidation.create,
  validationHandler,
  subcategoryController.createSubcategory
);
router.patch(
  "/subcategory/:id",
  subcategoryValidation.update,
  validationHandler,
  subcategoryController.updateSubcategory
);
router.delete("/subcategory/:id", subcategoryController.deleteSubcategory);

export default router;
