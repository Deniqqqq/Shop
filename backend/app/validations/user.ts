import { body } from "express-validator";

export const create = [
  body("fullName", "Имя должно быть больше 3 символов").isLength({ min: 4 }),
  body("email", "Не верный формат почты").isEmail(),
  body("password", "Пароль должен быть больше 4 символов").isLength({ min: 5 }),
  body("phone", "Не верный формат телефона").isMobilePhone("ru-RU"),
];

export const update = [
  body("fullName", "Имя должно быть больше 3 символов")
    .optional()
    .isLength({ min: 4 }),
  body("email", "Не верный формат почты").optional().isEmail(),
  body("password", "Пароль должен быть больше 4 символов")
    .optional()
    .isLength({ min: 5 }),
  body("phone", "Не верный формат телефона").optional().isMobilePhone("ru-RU"),
];
