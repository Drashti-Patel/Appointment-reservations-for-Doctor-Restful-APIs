import { Router } from 'express';
import invalidRoute from '../../controllers/invalidController';

const router = Router();

/**
 * ALL for invalid routes
 */
router.all('/*', invalidRoute);

// Exporting the module
export default router;
