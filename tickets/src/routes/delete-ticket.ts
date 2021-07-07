import { Router } from 'express';

const router = Router();

router.route('/api/tickets/').delete();

export { router as deleteTicketRouter };
