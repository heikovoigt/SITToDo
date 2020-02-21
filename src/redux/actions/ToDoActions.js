import actionsFunction from "./generated/ToDoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ToDoApi from "../../api/ToDoApi";
 
 actionsFunction.loadToDoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ToDoApi
     .getToDoList()
     .then(list => {
       dispatch(actionsFunction.loadToDoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
