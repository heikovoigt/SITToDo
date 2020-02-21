import ToDoApiGenerated from "./generated/ToDoApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ToDoApi extends ToDoApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get ToDo List
  static getToDoList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/todos")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ToDoApi;