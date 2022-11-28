import express from "express";
import userRouter from "./user";
import CategoryRouter from "./category";
import SubcategoryRouter from "./subcategory";

const router = express.Router();

router.use(userRouter);
router.use(CategoryRouter);
router.use(SubcategoryRouter);

export default router;
