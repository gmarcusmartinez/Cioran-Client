import { Router } from "express";
import { getProject } from "../controllers/get-project";

const router = Router();

router.route("/api/projects/:id").get(getProject);

export { router as getProjectRouter };
