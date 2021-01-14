import axios from 'axios';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
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
export function* flightSearchSaga() {
  yield takeLatest(flightSearchActions.loadCountries, loadCountries);
}
