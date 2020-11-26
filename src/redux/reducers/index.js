import { combineReducers } from "redux";
import { resettableReducer } from "reduxsauce";
import { reducer as people } from "./people.reducer";

const resettable = resettableReducer("RESET_STATE");

const rootReducer = () =>
  combineReducers({
    people: resettable(people),
  });

export default rootReducer;
