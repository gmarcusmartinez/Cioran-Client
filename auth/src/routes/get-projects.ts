import { Router } from 'express';
import { getProjects } from '../controllers/get-projects';
import { currentUser, requireAuth } from '@cioran/common';

const router = Router();
router.get('/api/auth/my-projects', currentUser, requireAuth, getProjects);

export { router as myProjectsRouter };
