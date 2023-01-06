import * as ActionTypes from '../actiontypes';

const INITIAL_STATE = {
  taskData: [
    {
      id: 0,
      taskDate: '2023-01-05',
      taskTime: '00:00:03',
      title: 'Running',
      tags: ['exercise'],
      startLocation: {lat: '0.9030048', long: '78.1045899'},
      stopLocation: {lat: '9.9030048', long: '78.1045899'},
    },
    {
      id: 1,
      taskDate: '2023-01-04',
      taskTime: '00:00:10',
      title: 'Jogging',
      tags: ['Health', 'exercise'],
      startLocation: {lat: '9.9030048', long: '78.1045899'},
      stopLocation: {lat: '9.9030048', long: '78.1045899'},
    },
    {
      id: 2,
      taskDate: '2023-01-04',
      taskTime: '00:00:03',
      title: 'Gaming',
      tags: ['play', 'entertainment'],
      startLocation: {lat: '9.9030048', long: '78.1045899'},
      stopLocation: {lat: '9.9030048', long: '78.1045899'},
    },
    {
      id: 3,
      taskDate: '2023-01-03',
      taskTime: '00:00:03',
      title: 'Running',
      tags: ['exercise'],
      startLocation: {lat: '9.9030048', long: '78.1045899'},
      stopLocation: {lat: '9.9030048', long: '78.1045899'},
    },
    {
      id: 4,
      taskDate: '2023-01-02',
      taskTime: '10:00:03',
      title: 'Running',
      tags: ['exercise', 'health'],
      startLocation: {lat: '9.9030048', long: '78.1045899'},
      stopLocation: {lat: '9.9030048', long: '78.1045899'},
    },
  ],
};

export const rootstackReducer = (state = INITIAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    case ActionTypes.ADD_TASK_REQUEST:
      return {
        ...state,
      };
    case ActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        taskData: [...state.taskData, action.payload],
      };
    case ActionTypes.UPDATE_TASK_REQUEST:
      return {
        ...state,
      };
    case ActionTypes.UPDATE_TASK_SUCCESS:
      console.log('updated succes==>', action.payload);
      return {
        taskData: action.payload,
      };
    default:
      return state;
  }
};
