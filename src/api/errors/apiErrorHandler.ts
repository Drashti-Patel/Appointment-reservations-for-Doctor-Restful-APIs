import { NextFunction, Request, Response } from 'express';
import ApiError from './apiError';

function apiErrorHandler(error: ApiError, req: Request, res: Response, next: NextFunction) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || 'something went wrong internally',
    },
  });
  next();
}

export default apiErrorHandler;
