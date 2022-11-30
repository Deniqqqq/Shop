import { body } from "express-validator";

export const create = [
  body("brand").isLength({ min: 4 }),
  body("composition").isLength({ min: 4 }),
  body("imgList").isArray(),
  body("nutritionValuePer100g").isLength({ min: 4 }),
  body("packaging").isLength({ min: 4 }),
  body("productId").isMongoId(),
  body("shelfLive").isLength({ min: 4 }),
  body("storageConditions").isLength({ min: 4 }),
];

export const update = [
  body("brand").optional().isLength({ min: 4 }),
  body("composition").optional().isLength({ min: 4 }),
  body("imgList").optional().isArray(),
  body("nutritionValuePer100g").optional().isLength({ min: 4 }),
  body("packaging").optional().isLength({ min: 4 }),
  body("productId").optional().isMongoId(),
  body("shelfLive").optional().isLength({ min: 4 }),
  body("storageConditions").optional().isLength({ min: 4 }),
];
