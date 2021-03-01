import { body } from "express-validator";

export const projectValidation = [
  body("title")
    .isLength({ min: 2, max: 40 })
    .withMessage("Project title must be between 2 and 40 characters."),
  body("slug")
    .isLength({ min: 4, max: 6 })
    .withMessage("Slug must be between 4 and 6 characters."),
];
