import { body } from "express-validator";

export const signupValidation = [
  body("name").notEmpty().withMessage("Name field can not be empty."),
  body("email").isEmail().withMessage("Email must be valid."),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 charachters long."),
];
