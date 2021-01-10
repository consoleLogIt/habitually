import { ADD_HABIT, DELETE_HABIT, TASK_ICON_CHANGE } from "../actions/types";


//dailyView initial state
const InitialState = {
  dailyTask: [],
  weekStatus: [],
  TotalFireScore: 0,
};

//to copy state and the update
var modifiedArrayTask;
var modifiedArrayWeek;
var modifiedFireScore;

export const dailyReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      const dayStatus = {
        status: [0, 0, 0, 0, 0, 0, 0],
        fireScore: 0,
      };
      return {
        ...state,
        dailyTask: [...state.dailyTask, action.habit],
        weekStatus: [...state.weekStatus, dayStatus],
      };
    case DELETE_HABIT:
      modifiedArrayTask = state.dailyTask.filter(
        (item, index) => index !== action.id
      );
      modifiedFireScore =
        state.TotalFireScore - state.weekStatus[action.id].fireScore;
      modifiedArrayWeek = state.weekStatus.filter(
        (item, index) => index != action.id
      );
      return {
        ...state,
        dailyTask: modifiedArrayTask,
        weekStatus: modifiedArrayWeek,
        TotalFireScore: modifiedFireScore,
      };
    case TASK_ICON_CHANGE:
      modifiedArrayWeek = state.weekStatus.map((item, index) => {
        if (index === action.taskIndex) {
          modifiedFireScore = state.TotalFireScore - item.fireScore;
          item.status[action.dayIndex] = action.value;
          if (action.daily) {
            item.fireScore =
              action.value === 1
                ? item.fireScore + 1
                : !action.value
                ? item.fireScore - 1
                : item.fireScore;
          } else {
            item.fireScore =
              action.value === 1
                ? item.fireScore + 1
                : action.value === 2
                ? item.fireScore - 1
                : item.fireScore;
          }
          modifiedFireScore = modifiedFireScore + item.fireScore;
        }
        return item;
      });

      return {
        ...state,
        weekStatus: modifiedArrayWeek,
        TotalFireScore: modifiedFireScore,
      };

    default:
      return state;
  }
};
