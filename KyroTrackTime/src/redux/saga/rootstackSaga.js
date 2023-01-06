import {all, put, takeLatest} from 'redux-saga/effects';
import {addTaskSuccess, updateTaskSuccess} from '../actions/rootstackActions';
import * as ActionTypes from '../actiontypes';

// add task request call
export function* addTaskRequestCall({payload}) {
  try {
    yield put(addTaskSuccess(payload));
  } catch (err) {
    yield put(addTaskSuccess(err));
  }
}

// update task request call
export function* updateTaskRequestCall({payload}) {
  try {
    yield put(updateTaskSuccess(payload));
  } catch (err) {
    yield put(updateTaskSuccess(err));
  }
}

export default all([
  takeLatest(ActionTypes.ADD_TASK_REQUEST, addTaskRequestCall),
  takeLatest(ActionTypes.UPDATE_TASK_REQUEST, updateTaskRequestCall),
]);
