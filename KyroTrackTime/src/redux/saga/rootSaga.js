import {all} from 'redux-saga/effects';

import rootstackSaga from './rootstackSaga';

export default function* rootSaga() {
  return yield all([
    rootstackSaga,
  ]);
}
