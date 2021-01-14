import axios from 'axios';
// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { formActions } from './slice';

// export function* loadTools({
//   payload: { page = 0, search = ' ', searchTagsOnly = false },
// }) {
//   try {
//     const tools = yield call(
//       axios.get,
//       `tools?skip=${page}&search=${search}&searchTagsOnly=${searchTagsOnly}`,
//     );
//     yield put(formActions.toolsLoaded(tools.data));
//   } catch {
//     yield put(formActions.toolsError());
//   }
// }
export function* formSaga() {
  // yield takeLatest(formActions.loadTools, loadTools);
}
