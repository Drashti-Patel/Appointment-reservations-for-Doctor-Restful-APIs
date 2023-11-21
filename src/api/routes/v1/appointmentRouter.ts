import { Router } from 'express';
import appointmentController from '../../controllers/appointment';

const router = Router();

/**
 * GET v1/appointment
 */
router.get('', appointmentController.getAllAppointments);

/**
 * POST v1/appointment
 */
router.post('', appointmentController.addAppointment);

/**
 * PUT v1/appointment/update/:appointmentId
 */
router.put('/update/:appointmentId', appointmentController.updateAppointment);

/**
 * DELETE v1/appointment/delete/:appointmentId
 */
router.delete('/delete', appointmentController.deleteAppointments);

/**
 * GET v1/appointment/search/:customerName
 */
router.get('/search/:customerName', appointmentController.getAppointmentsByName);

export default router;
