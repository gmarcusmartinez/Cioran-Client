import { Router } from 'express';

const router = Router();

router.route('/api/tickets/:id').put();

export { router as updateTicketRouter };
