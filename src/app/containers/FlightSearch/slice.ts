import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the FlightSearch container
export const initialState: ContainerState = {
  countries: [],
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
    error(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
  },
});

export const {
  actions: flightSearchActions,
  reducer,
  name: sliceKey,
} = flightSearchSlice;
