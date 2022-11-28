import { body } from "express-validator";

export const create = [
  body("title", "Название должно быть больше 3 символов").isLength({ min: 4 }),
  body("img", "Путь к картинке должен быть больше 4 символов").isLength({
    min: 5,
  }),
  body("categoryId", "Не верный формат айди категории").isMongoId(),
];

export const update = [
  body("title", "Название должно быть больше 3 символов")
    .optional()
    .isLength({ min: 4 }),
  body("img", "Путь к картинке должен быть больше 4 символов")
    .optional()
    .isLength({
      min: 5,
    }),
  body("categoryId", "Не верный формат айди категории").optional().isMongoId(),
];
