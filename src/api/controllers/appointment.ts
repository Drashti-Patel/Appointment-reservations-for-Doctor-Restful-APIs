import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import appointmentCollection from '../model/appointments';
import ApiError from '../errors/apiError';
import { AppointmentRequestBody } from '../interfaces/appointmentInterface';

const addAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }

    const data = req.body as AppointmentRequestBody;
    const appointmentId = uuidv4();
    const response = await appointmentCollection.addAppointment(appointmentId, data);
    res.status(201).send({ appointmentId });
  } catch (e) {
    next(e);
  }
};

export default {
  addAppointment,
};
