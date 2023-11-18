enum AppointmentStatus {
  Scheduled = 'SCHEDULED',
  Cancelled = 'CANCELLED',
  Attended = 'ATTENDED',
}

export interface AppointmentRequestBody {
  patientFirstName: string;
  patientLastName: string;
  contactNumber: string;
  appointmentDateTime: string;
  status: AppointmentStatus;
}
