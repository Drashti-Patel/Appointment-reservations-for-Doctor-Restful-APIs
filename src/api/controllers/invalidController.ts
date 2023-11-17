import { NextFunction, Request, Response } from 'express';
import ApiError from '../errors/apiError';

// Controller Actions
const invalidRoute = (req: Request, res: Response, next: NextFunction) => {
  next(ApiError.notFound('404, Page not found'));
};

export default invalidRoute;
