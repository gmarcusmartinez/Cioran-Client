import { Router } from "express";
import { signup } from "../controllers/signup";
import { validateRequest } from "@cioran/common";
import { signupValidation } from "../validation/signupValidation";

const router = Router();

router.post("/api/auth/signup", signupValidation, validateRequest, signup);

export { router as signupRouter };
