import axiosBase from "../../axios-base";
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "./actionTypes";

export const getUsersStart = () => {
  return {
    type: GET_USERS_START,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    users: users,
  };
};

export const getUsersFail = (error) => {
  return {
    type: GET_USERS_FAIL,
    error: error,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStart());
    axiosBase
      .get("/users")
      .then((res) => {
        dispatch(getUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUsersFail(err));
      });
  };
};
