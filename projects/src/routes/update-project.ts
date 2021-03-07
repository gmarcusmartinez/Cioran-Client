import { Router } from "express";
import { updateProject } from "../controllers/update-project";
import { currentUser, requireAuth, validateRequest } from "@cioran/common";
import { projectValidation } from "../validation/projectValidation";

const router = Router();

router
  .route("/api/projects/:id")
  .put(
    currentUser,
    requireAuth,
    projectValidation,
    validateRequest,
    updateProject
  );

export { router as updateProjectRouter };
