import express from "express";
import userRouter from "./user";
import categoryRouter from "./category";
import subcategoryRouter from "./subcategory";
import productRouter from "./product";

const router = express.Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(subcategoryRouter);
router.use(productRouter);

export default router;
