import { Router } from 'express';

const router = Router();

router.route('/api/tickets/').get();

export { router as getTicketsRouter };
