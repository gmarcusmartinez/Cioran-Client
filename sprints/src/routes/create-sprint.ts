import { Router } from 'express';
import { createSprint } from '../controllers/create-sprint';
import { requireAuth, validateRequest } from '@cioran/common';

const router = Router();

router.route('/api/sprints').post(requireAuth, createSprint);

export { router as createSprintRouter };
