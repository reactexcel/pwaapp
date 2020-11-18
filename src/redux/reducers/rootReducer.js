import { combineReducers } from "redux";
import listPostReducer from "./listPostReducer";
import addPostReducer from "./addPostReducer";
const rootReducer = combineReducers({
  PostListstatus: listPostReducer,
  AddPoststatus: addPostReducer,
});

export default rootReducer;
