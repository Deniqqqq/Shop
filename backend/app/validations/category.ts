import { body } from "express-validator";

export const create = [
  body("title", "Название должно быть больше 3 символов").isLength({ min: 4 }),
  body("img", "Путь к картинке должен быть больше 4 символов").isLength({
    min: 5,
  }),
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
];
