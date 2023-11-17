import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from '../api/routes/v1';
import { LoggerStream } from './logger';
import apiErrorHandler from '../api/errors/apiErrorHandler';
import invalidRouter from '../api/routes/v1/invalidRouter';

/**
 * Express instance
 * @public
 */
// dotenv.config();

const app = express();

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// logger
app.use(morgan('combined', { stream: new LoggerStream() }));

// mount api v1 routes
app.use('/v1', routes);

// Invalid Route
app.all('/*', invalidRouter);

// Error Handling
app.use(apiErrorHandler);

export default app;
