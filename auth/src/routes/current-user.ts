import { Router } from "express";
import { getCurrentUser } from "../controllers/current-user";
import { currentUser } from "@cioran/common";

const router = Router();
router.get("/api/auth/currentuser", currentUser, getCurrentUser);

export { router as currentUserRouter };
