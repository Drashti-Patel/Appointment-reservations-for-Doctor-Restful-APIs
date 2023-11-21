import { Router } from 'express';
import appointmentController from '../../controllers/appointment';
const router = Router();

/**
 * POST v1/appointment
 */
router.post('', appointmentController.addAppointment);

/**
 * PUT v1/appointment/update/:appointmentId
 */
router.put('/update/:appointmentId', appointmentController.updateAppointment);

export default router;
