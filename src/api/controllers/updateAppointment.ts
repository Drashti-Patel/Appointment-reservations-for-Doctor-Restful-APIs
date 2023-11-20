import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import updateAppointmentCollection from '../model/updateAppointments';
import ApiError from '../errors/apiError';
import { UpdateAppointmentRequestBody } from '../interfaces/appointmentInterface';

const updateAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }

    const data = req.body as UpdateAppointmentRequestBody;
    const response = await updateAppointmentCollection.updateAppointment(data);
    const message = 'your appointment has updated successfully';
    res.status(201).send({ message });
  } catch (e) {
    next(e);
  }
};

export default {
  updateAppointment,
};
