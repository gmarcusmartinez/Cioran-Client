import { Router } from 'express';
import { updateProject } from '../controllers/update-project';
import { requireAuth, validateRequest } from '@cioran/common';
import { projectValidation } from '../validation/projectValidation';

const router = Router();

router
  .route('/api/projects/:id')
  .put(requireAuth, projectValidation, validateRequest, updateProject);

export { router as updateProjectRouter };
