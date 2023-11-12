import { Router } from 'express';
import validRoute from '../../controllers/validController';

const router = Router();

/**
 * ALL for valid routes
 */
router.get('/app-name', validRoute.getAppName);

// Exporting the module
export default router;
