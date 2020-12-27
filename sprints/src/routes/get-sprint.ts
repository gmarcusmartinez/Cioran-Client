import { Router } from "express";
import { getSprint } from "../controllers/get-sprint";
// import { requireAuth, validateRequest } from "@cioran/common";

const router = Router();

router.route("/api/sprints/:id").get(getSprint);

export { router as getSprintRouter };
