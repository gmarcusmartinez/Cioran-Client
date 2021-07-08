import { Router } from 'express';
import { createSprint } from '../controllers/create-sprint';
import { requireAuth, validateRequest } from '@cioran/common';
import { sprintValidation } from '../validation/sprint-validation';

const router = Router();

router
  .route('/api/sprints')
  .post(requireAuth, sprintValidation, validateRequest, createSprint);

export { router as createSprintRouter };
