import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the FlightSearch container
export const initialState: ContainerState = {
  countries: [],
  flightNumber: '',
  fullName: '',
  loading: true,
  error: '',
};

const flightSearchSlice = createSlice({
  name: 'flightSearch',
  initialState,
  reducers: {
    loadCountries(state) {
      state.loading = true;
    },
    loadedCountries(state, action: PayloadAction<any>) {
      state.countries = action.payload;
      state.loading = false;
    },
    searchFlight(state, action: PayloadAction<any>) {
      state.loading = true;
      state.flightNumber = action.payload.flightNumber;
      state.fullName = action.payload.fullName;
    },
    error(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
    loading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const {
  actions: flightSearchActions,
  reducer,
  name: sliceKey,
} = flightSearchSlice;
