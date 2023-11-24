import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import appointmentCollection from '../model/appointments';
import ApiError from '../errors/apiError';
import { AppointmentRequestBody, AppointmentIdsRequestBody } from '../interfaces/appointmentInterface';

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
    const appointmentId = req.params.appointmentId as string;
    const data = req.body as AppointmentRequestBody;
    const response = await appointmentCollection.updateAppointment(appointmentId, data);
    const message = 'your appointment has updated successfully';
    res.status(200).send({ message });
  } catch (e) {
    next(e);
  }
};

const deleteAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }
    const appointmentId = req.params.appointmentId as string;
    const response = await appointmentCollection.deleteAppointment(appointmentId);
    const message = 'your appointment has deleted successfully';
    res.status(200).send({ message });
  } catch (e) {
    next(e);
  }
};

const deleteAppointments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }
    const data = req.body as AppointmentIdsRequestBody;
    const response = await appointmentCollection.deleteAppointments(data);
    const message = 'your appointment has removed successfully';
    res.status(200).send({ message });
  } catch (e) {
    next(e);
  }
};

const getAllAppointments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }
    const appointmentList = await appointmentCollection.fetchAllAppointments();
    const response = {
      count: appointmentList.length,
      appointments: appointmentList,
    };
    res.status(200).send(response);
  } catch (e) {
    next(e);
  }
};

const getAppointmentsByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }

    const customerName = req.params.customerName as string;
    const appointmentList = await appointmentCollection.fetchAppointmentsByName(customerName);

    const response = {
      count: appointmentList.length,
      appointments: appointmentList,
    };
    res.status(200).send(response);
  } catch (e) {
    next(e);
  }
};

const findAppointmentByServiceName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((error) => error.msg)
        .join(' | ');
      throw ApiError.badRequest(message);
    }

    const serviceName = req.query.serviceName as string;
    const appointmentList = await appointmentCollection.fetchAppointmentsByServiceName(serviceName);

    const response = {
      count: appointmentList.length,
      appointments: appointmentList,
    };
    res.status(200).send(response);
  } catch (e) {
    next(e);
  }
};

export default {
  addAppointment,
  updateAppointment,
  deleteAppointment,
  deleteAppointments,
  getAllAppointments,
  getAppointmentsByName,
  findAppointmentByServiceName,
};
