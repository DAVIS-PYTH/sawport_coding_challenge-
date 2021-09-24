import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_DETAILS_RESET,
  USER_REGISTER_RESET,
  ADMIN_GET_USERS_REQUEST,
  ADMIN_GET_USERS_SUCCESS,
  ADMIN_GET_USERS_FAIL,
  ADMIN_GET_ADMINS_REQUEST,
  ADMIN_GET_ADMINS_SUCCESS,
  ADMIN_GET_ADMINS_FAIL,
} from "../constants/UserConstants";

export const UserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userDetails: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case USER_REGISTER_RESET:
      return {};

    default:
      return state;
  }
};

export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, userDetails: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_DETAILS_RESET:
      return {};

    default:
      return state;
  }
};

export const GetUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_USERS_REQUEST:
      return { loading: true };

    case ADMIN_GET_USERS_SUCCESS:
      return { loading: false, users: action.payload };

    case ADMIN_GET_USERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetAdminsReducer = (state = { admins: [] }, action) => {
  switch (action.type) {
    case ADMIN_GET_ADMINS_REQUEST:
      return { loading: true };

    case ADMIN_GET_ADMINS_SUCCESS:
      return { loading: false, admins: action.payload };

    case ADMIN_GET_ADMINS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
