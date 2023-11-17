import { Router } from 'express';
import validRoutes from './validRouter';

const router = Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * ALL v1/valid
 */
router.use('/valid', validRoutes);

export default router;
