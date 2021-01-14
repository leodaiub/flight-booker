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
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeForm(state, action: PayloadAction<any>) {
      state.birthDate = action.payload;
    },
  },
});

export const { actions: formActions, reducer, name: sliceKey } = formSlice;
