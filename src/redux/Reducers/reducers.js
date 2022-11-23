import {
  ADD_TASK,
  DELETE_ALL,
  REMOVE_TASK,
  UPDATE_TASK,
  UPDATE_CHECKBOX,
} from "../Actions/actions";
const allTasks = [
];

export const taskOperationReducers = (state = allTasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    case DELETE_ALL:
      return [];

    case REMOVE_TASK:
      const filteredTask = state.filter((task) => task.id != action.payload);
      return filteredTask;

    case UPDATE_TASK:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.taskName = data.taskName;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      
      return updatedArray;

    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;

    

    default:
      return state;
  }
};
