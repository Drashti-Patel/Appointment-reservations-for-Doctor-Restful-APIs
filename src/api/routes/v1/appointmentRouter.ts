import { Router } from 'express';
import appointmentController from '../../controllers/appointment';
import updateAppointment from '../../controllers/updateAppointment';

const router = Router();

/**
 * POST v1/collections
 */
router.post('', appointmentController.addAppointment);

router.post('', updateAppointment.updateAppointment);

export default router;
