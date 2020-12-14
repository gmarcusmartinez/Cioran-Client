import { Router } from "express";
import { signin } from "../controllers/signin";
import { validateRequest } from "@cioran/common";
import { signinValidation } from "../validation/signinValidation";

const router = Router();

router
  .route("/api/auth/signin")
  .post(signinValidation, validateRequest, signin);

export { router as signinRouter };
