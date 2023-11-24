import firebaseAdmin from '../../config/firebaseConfig';
import { AppointmentRequestBody, AppointmentIdsRequestBody } from '../interfaces/appointmentInterface';

const appointmentCollection = firebaseAdmin.firestore().collection('reservations');

const addAppointment = async (appointmentId: string, data: AppointmentRequestBody) =>
  await appointmentCollection.doc(appointmentId).set(data);

const fetchAllAppointments = async () => {
  const appointmentList = await appointmentCollection.get();
  const result = appointmentList.docs.map((item) => item.data());
  return result;
};

const fetchAppointmentsByName = async (customerName: string) => {
  const appointmentList = await appointmentCollection.where('patientFirstName', '==', customerName).get();
  const result = appointmentList.docs.map((item) => item.data());
  return result;
};

const fetchAppointmentsByServiceName = async (serviceName: string) => {
  const appointmentList = await appointmentCollection.where('serviceName', '==', serviceName).get();
  const result = appointmentList.docs.map((item) => item.data());
  return result;
};

const updateAppointment = async (appointmentId: string, data: AppointmentRequestBody) => {
  const appointmentRef = appointmentCollection.doc(appointmentId);

  try {
    // Update the document with the provided data
    await appointmentRef.set(data);

    console.log('Update successful');
  } catch (error) {
    console.error('Error updating data:', error);
    // Handle the error as needed
  }
};

const deleteAppointment = async (appointmentId: string) => {
  const appointmentRef = appointmentCollection.doc(appointmentId);

  try {
    // Delete the document with the provided data
    await appointmentRef.delete();
    console.log('Delete successful');
  } catch (error) {
    console.error('Error updating data:', error);
    // Handle the error as needed
  }
};

const deleteAppointments = async (data: AppointmentIdsRequestBody) => {
  try {
    // Delete the document with the provided data
    await Promise.all(
      data.appointmentIds.map(async (appointmentId) => {
        const appointmentRef = appointmentCollection.doc(appointmentId);
        await appointmentRef.delete();
      }),
    );
    console.log('Delete successful');
  } catch (error) {
    console.error('Error updating data:', error);
    // Handle the error as needed
  }
};

export default {
  addAppointment,
  updateAppointment,
  deleteAppointment,
  deleteAppointments,
  fetchAllAppointments,
  fetchAppointmentsByServiceName,
  fetchAppointmentsByName,
};
