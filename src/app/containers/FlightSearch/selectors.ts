import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.flightSearch || initialState;

export const selectFlightSearch = createSelector(
  [selectDomain],
  flightSearchState => flightSearchState,
);
