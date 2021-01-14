import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { flightSearchActions } from './slice';

export function* loadCountries({ payload }) {
  try {
    const { data } = yield call(
      axios.get,
      'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code',
    );
    yield put(flightSearchActions.loadedCountries(data));
  } catch {
    yield put(flightSearchActions.error('error'));
  }
}

export function* searchFlight({ payload }) {
  try {
    yield call(
      axios.post,
      'https://my-json-server.typicode.com/leodaiub/flight-booker/flights',
      payload,
    );
    yield put(flightSearchActions.loading(false));
  } catch {
    yield put(flightSearchActions.error('error'));
  }
}
export function* flightSearchSaga() {
  yield takeLatest(flightSearchActions.loadCountries, loadCountries);
  yield takeLatest(flightSearchActions.searchFlight, searchFlight);
}
