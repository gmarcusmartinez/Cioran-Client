import { Router } from "express";
import { signout } from "../controllers/signout";

const router = Router();

router.route("/api/auth/signout").post(signout);

export { router as signoutRouter };
