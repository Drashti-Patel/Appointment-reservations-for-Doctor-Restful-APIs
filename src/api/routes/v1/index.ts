import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../../docs/swagger.json';
import appointmentRoutes from './appointmentRouter';

const router = Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * ALL v1/appointment
 */
router.use('/appointment', appointmentRoutes);

/**
 * GET v1/api-docs
 */
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
