import { NextFunction, Request, Response } from 'express';

// Controller Actions
const getAppName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ name: 'Doctor Reservation App' });
  } catch (e) {
    next(e);
  }
};

export default { getAppName };
