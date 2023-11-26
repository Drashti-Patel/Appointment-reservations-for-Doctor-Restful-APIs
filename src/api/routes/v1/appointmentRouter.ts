import { Router } from 'express';
import appointmentController from '../../controllers/appointment';

const router = Router();

/**
 * GET v1/appointment
 */
router.get('', appointmentController.getAllAppointments);

/**
 * GET v1/appointment/findByService?service
 */
router.get('/findByService', appointmentController.findAppointmentByServiceName);

/**
 * GET v1/appointment/fetchUpcomingAppointments
 */
router.get('/fetchUpcomingAppointments', appointmentController.fetchUpcomingAppointments);


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
router.delete('/delete/:appointmentId', appointmentController.deleteAppointment);

/**
 * POST v1/appointment/deleteAppointments
 */
router.post('/deleteAppointments', appointmentController.deleteAppointments);

/**
 * GET v1/appointment/search/:customerName
 */
router.get('/search/:customerName', appointmentController.getAppointmentsByName);

export default router;
