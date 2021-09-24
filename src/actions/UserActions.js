import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
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
  ADMIN_DELETE_REQUEST,
  ADMIN_DELETE_SUCCESS,
  ADMIN_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../constants/UserConstants";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

export const UserRegisterAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    var url = "https://customer-care-platform.herokuapp.com/users/signup";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message ? data.message : "Request could not be processed!"
      );
    }

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminRegisterAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_REGISTER_REQUEST });

    var url = "https://customer-care-platform.herokuapp.com/admins/signup";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message ? data.message : "Request could not be processed!"
      );
    }

    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserLoginAction = (user, admin) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    var url = admin
      ? "https://customer-care-platform.herokuapp.com/admins/login"
      : "https://customer-care-platform.herokuapp.com/users/login";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRkZTFiYzYzODliMjAwN2U5YzNkYWUiLCJpYXQiOjE2MzI0OTQwMTIsImV4cCI6MTYzMjU4MDQxMn0.jT22JVaj_s8ivlqxc334_rAwRCJBQ1INq0Q7KYIvLeg",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message ? data.message : "Email or Password is Incorrect"
      );
    }

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userDetails", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_GET_USERS_REQUEST });
    var url = "https://customer-care-platform.herokuapp.com/users/";

    const { userDetails } = getState().UserLoginReducer;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": `${userDetails.token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message ? data.message : "Unable to fetch data!");
    }

    dispatch({ type: ADMIN_GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAdminsAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_GET_ADMINS_REQUEST });
    var url = "https://customer-care-platform.herokuapp.com/admins/";

    const { userDetails } = getState().UserLoginReducer;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": `${userDetails.token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message ? data.message : "Unable to fetch data!");
    }

    dispatch({ type: ADMIN_GET_ADMINS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ADMINS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_DELETE_REQUEST });
    var url = `https://customer-care-platform.herokuapp.com/admins/delete/${id}`;

    const { userDetails } = getState().UserLoginReducer;

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": `${userDetails.token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message ? data.message : "Something went wrong!");
    }

    dispatch({ type: ADMIN_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });
    var url = `https://customer-care-platform.herokuapp.com/users/delete/${id}`;

    const { userDetails } = getState().UserLoginReducer;

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "x-auth-token": `${userDetails.token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message ? data.message : "Something went wrong!");
    }

    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserLogOutAction = () => async (dispatch) => {
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_REGISTER_RESET });
  localStorage.removeItem("userDetails");
};
