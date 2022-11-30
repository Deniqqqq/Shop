import express from "express";
import { basketController } from "../controllers/index";
import { basketValidation } from "../validations/index";
import validationHandler from "../utils/validationHandler";

const router = express.Router();

// Routes
router.get("/basket", basketController.readAllBasket);
router.get("/basket/:id", basketController.readBasket);
router.post(
  "/basket",
  basketValidation.create,
  validationHandler,
  basketController.createBasket
);
router.patch(
  "/basket/:id",
  basketValidation.update,
  validationHandler,
  basketController.updateBasket
);
router.delete("/basket/:id", basketController.deleteBasket);

export default router;
