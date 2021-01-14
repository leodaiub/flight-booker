/* --- STATE --- */
export interface FormState {
  flightNumber: string;
  fullName: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  passportNumber: string;
  residence: string;
  passportExpiry: string;
  birthDate: string;
  birthPlace: string;
  passportDate: string;
  passportLocation: string;
  acceptTandC: boolean;
  loading: boolean;
  error: string;
}

export type ContainerState = FormState;
