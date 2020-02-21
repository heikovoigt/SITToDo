// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  todo: {}
};

// Reducer
export default function ToDoEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TODO_SUCCESS:
      return { ...state, todo: action.payload };
    case types.UPDATE_TODO_SUCCESS:
      return { ...state, todo: action.payload };
    case types.GET_TODO_SUCCESS:
      return { ...state, todo: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}