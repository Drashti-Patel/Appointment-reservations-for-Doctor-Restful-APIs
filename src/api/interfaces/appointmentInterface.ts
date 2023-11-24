enum AppointmentStatus {
  Scheduled = 'SCHEDULED',
  Cancelled = 'CANCELLED',
  Attended = 'ATTENDED',
}

enum Services {
  Dental = 'DENTAL',
  Cardio = 'CARDIO',
  Pediatrics = 'PEDIATRICS',
}

export interface AppointmentRequestBody {
  patientFirstName: string;
  patientLastName: string;
  contactNumber: string;
  appointmentDateTime: string;
  status: AppointmentStatus;
  serviceName: Services;
}

export interface AppointmentIdsRequestBody {
  appointmentIds: string[];
}
