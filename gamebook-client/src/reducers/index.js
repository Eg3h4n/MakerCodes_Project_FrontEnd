import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";
import registerReducer from "./registerReducer";

export default combineReducers({
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
  form: formReducer
});
