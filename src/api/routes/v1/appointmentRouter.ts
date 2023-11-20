import { Router } from 'express';
import appointmentController from '../../controllers/appointment';

const router = Router();

/**
 * POST v1/collections
 */
router.post('', appointmentController.addAppointment);

export default router;
