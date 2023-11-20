import firebaseAdmin from '../../config/firebaseConfig';
import { UpdateAppointmentRequestBody } from '../interfaces/appointmentInterface';

const productsCollection = firebaseAdmin.firestore().collection('reservations');

const updateAppointment = async (data: UpdateAppointmentRequestBody) => {
  const appointmentRef = productsCollection.doc(data.appointmentId);

  try {
    // Update the document with the provided data
    await appointmentRef.set(data);

    console.log('Update successful');
  } catch (error) {
    console.error('Error updating data:', error);
    // Handle the error as needed
  }
};

export default { updateAppointment };
