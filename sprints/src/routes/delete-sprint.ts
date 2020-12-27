import { Router } from "express";
import { deleteSprint } from "../controllers/delete-sprint";
// import { requireAuth, validateRequest } from "@cioran/common";

const router = Router();

router.route("/api/sprints/:id").delete(deleteSprint);

export { router as deleteSprintRouter };
