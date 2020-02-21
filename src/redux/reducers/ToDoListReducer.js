// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ToDoListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TODO_SUCCESS:
      return { ...state, todo: action.payload };
    case types.LIST_TODO_SUCCESS:
      return { ...state, listToDo: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}