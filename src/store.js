import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  UserLoginReducer,
  UserRegisterReducer,
  GetUsersReducer,
  GetAdminsReducer,
  DeleteAdminReducer,
} from "./reducers/UserReducers";

const reducers = combineReducers({
  UserLoginReducer: UserLoginReducer,
  UserRegisterReducer: UserRegisterReducer,
  GetUsersReducer: GetUsersReducer,
  GetAdminsReducer: GetAdminsReducer,
  DeleteAdminReducer: DeleteAdminReducer,
});

const userInfoFromStore = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

const initialState = {
  UserLoginReducer: { userDetails: userInfoFromStore },
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
