import express from "express";
import { userController } from "../controllers/index";
import { userValidation } from "../validations/index";
import validationHandler from "../utils/validationHandler";

const router = express.Router();

// Routes
router.get("/user", userController.readAllUser);
router.get("/user/:id", userController.readUser);
router.post(
  "/user",
  userValidation.create,
  validationHandler,
  userController.createUser
);
router.patch(
  "/user/:id",
  userValidation.update,
  validationHandler,
  userController.updateUser
);
router.delete("/user/:id", userController.deleteUser);

export default router;
