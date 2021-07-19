import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import carReducer from './car.reducer';
import usersReducer from './users.reducer';


export default combineReducers({
  carReducer,
  userReducer,
  usersReducer

  
});
