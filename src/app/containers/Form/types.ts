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
}

export type ContainerState = FormState;
