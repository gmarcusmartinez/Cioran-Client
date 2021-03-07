import { requireAuth } from '@cioran/common/build';
import { Router } from 'express';
import { getProject } from '../controllers/get-project';

const router = Router();

router.route('/api/projects/:id').get(requireAuth, getProject);

export { router as getProjectRouter };
