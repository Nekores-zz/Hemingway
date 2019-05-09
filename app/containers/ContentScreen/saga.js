import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SAMPLE_ACTION } from './constants';

function* addNewUser({ payload: { name } }) {
  try {
    console.log(name, 'have successfully called an API',)
  } catch(error) {
    throw error
  }
}
// Individual exports for testing
export default function* contentScreenSaga() {
  yield takeLatest(SAMPLE_ACTION, addNewUser);
}
