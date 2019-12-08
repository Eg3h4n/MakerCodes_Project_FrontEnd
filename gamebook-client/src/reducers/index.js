import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";
import registerReducer from "./registerReducer";
import profileReducer from "./profileReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
    form: formReducer,
    profile: profileReducer
  });

export default createRootReducer;

/*  export default combineReducers({
  //register: registerReducer,
  login: loginReducer,
  user: userReducer,
  form: formReducer
});  */
