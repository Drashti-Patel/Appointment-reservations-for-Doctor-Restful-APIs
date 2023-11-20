import { Router } from 'express';
import updateAppointmentController from '../../controllers/updateAppointment';

const router = Router();

/**
 * POST v1/collections
 */
router.post('', updateAppointmentController.updateAppointment);

export default router;
