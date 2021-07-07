import { Router } from 'express';

const router = Router();

router.route('/api/tickets/').post();

export { router as createTicketRouter };
