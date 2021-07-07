import { Router } from 'express';
import { getSprints } from '../controllers/get-sprints';
// import { requireAuth, validateRequest } from "@cioran/common";

const router = Router();

router.route('/api/sprints/').get(getSprints);

export { router as getSprintsRouter };
