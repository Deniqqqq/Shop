import express from "express";
import userRouter from "./user";
import CategoryRouter from "./category";

const router = express.Router();

router.use(userRouter);
router.use(CategoryRouter);

export default router;
