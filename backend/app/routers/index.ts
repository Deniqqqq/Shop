import express from "express";
import userRouter from "./user";
import categoryRouter from "./category";
import subcategoryRouter from "./subcategory";
import productRouter from "./product";
import productInfoRouter from "./productInfo";
import basketRouter from "./basket";

const router = express.Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(subcategoryRouter);
router.use(productRouter);
router.use(productInfoRouter);
router.use(basketRouter);

export default router;
