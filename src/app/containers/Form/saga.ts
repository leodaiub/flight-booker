import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { formActions } from './slice';

export function* checkIn({ payload }) {
  try {
    yield call(
      axios.post,
      'https://my-json-server.typicode.com/leodaiub/flight-booker/checkins',
      payload,
    );
    yield put(formActions.loading(false));
  } catch {
    yield put(formActions.error('error'));
  }
}
export function* formSaga() {
  yield takeLatest(formActions.checkIn, checkIn);
}
