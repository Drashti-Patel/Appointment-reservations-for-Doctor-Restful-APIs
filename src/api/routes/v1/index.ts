import { Router } from 'express';
import validRoutes from './validRouter';
import appointmentRoutes from './appointmentRouter';

const router = Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * ALL v1/valid
 */
router.use('/valid', validRoutes);

/**
 * ALL v1/appointment
 */
router.use('/appointment', appointmentRoutes);
router.use('/updateAppointment', appointmentRoutes);

export default router;
