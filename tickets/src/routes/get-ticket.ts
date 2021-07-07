import { Router } from 'express';

const router = Router();

router.route('/api/tickets/:id').get();

export { router as getTicketRouter };
