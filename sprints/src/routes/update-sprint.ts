import { Router } from "express";
import { updateSprint } from "../controllers/update-sprint";
// import { requireAuth, validateRequest } from "@cioran/common";

const router = Router();

router.route("/api/sprints/:id").put(updateSprint);

export { router as updateSprintRouter };
