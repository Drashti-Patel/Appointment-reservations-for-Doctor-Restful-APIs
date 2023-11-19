import firebaseAdmin from '../../config/firebaseConfig';
import { AppointmentRequestBody } from '../interfaces/appointmentInterface';

const productsCollection = firebaseAdmin.firestore().collection('reservations');

const addAppointment = async (appointmentId: string, data: AppointmentRequestBody) =>
  await productsCollection.doc(appointmentId).set(data);

export default { addAppointment };
