import { body } from "express-validator";

export const create = [
  body("userId").isMongoId(),
  body("productList").isArray(),
];

export const update = [
  body("userId").optional().isMongoId(),
  body("productList").optional().isArray,
];
