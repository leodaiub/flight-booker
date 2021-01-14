import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the form container
export const initialState: ContainerState = {
  flightNumber: '',
  fullName: '',
  nationality: '',
  email: '',
  phoneNumber: '',
  passportNumber: '',
  residence: '',
  passportExpiry: '',
  birthDate: '',
  birthPlace: '',
  passportDate: '',
  passportLocation: '',
  acceptTandC: false,
  loading: false,
  error: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeForm(state, action: PayloadAction<any>) {
      Object.assign(state, action.payload);
    },
    checkIn(state, action: PayloadAction<any>) {
      Object.assign(state, action.payload);
      state.loading = true;
    },
    loading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
    error(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
  },
});

export const { actions: formActions, reducer, name: sliceKey } = formSlice;
