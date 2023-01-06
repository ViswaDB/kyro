import * as ActionTypes from '../actiontypes'

// add task
export function addTaskRequest(payload) {
  return {
    type: ActionTypes.ADD_TASK_REQUEST,
    payload,
  };
}

export function addTaskSuccess(payload) {
  console.log('success action',payload)
  return {
    type: ActionTypes.ADD_TASK_SUCCESS,
    payload
  };
}

// update task
export function updateTaskRequest(payload) {
  return {
    type: ActionTypes.UPDATE_TASK_REQUEST,
    payload,
  };
}

export function updateTaskSuccess(payload) {
  return {
    type: ActionTypes.UPDATE_TASK_SUCCESS,
    payload
  };
}
