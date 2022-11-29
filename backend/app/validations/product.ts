import { body } from "express-validator";

export const create = [
  body("title", "Название товара должно быть больше 3 символов").isLength({
    min: 4,
  }),
  body("stok").isInt({ min: 1 }),
  body("price").isInt({ min: 100 }),
  body("img").isLength({ min: 4 }),
  body("subcategoryId").isMongoId(),
  body("productInfoId").optional().isMongoId(),
];

export const update = [
  body("title", "Название товара должно быть больше 3 символов")
    .optional()
    .isLength({
      min: 4,
    }),
  body("stok").optional().isInt({ min: 1 }),
  body("price").optional().isNumeric().isLength({ min: 100 }),
  body("img").optional().isLength({ min: 4 }),
  body("subcategoryId").optional().isMongoId(),
  body("productInfoId").optional().isMongoId(),
];
