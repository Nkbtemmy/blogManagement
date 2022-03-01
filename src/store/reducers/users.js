import { updateObject } from "../../shared/utility";
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const getUsersStart = (state, action) => {
  return updateObject(state, {
    users: [],
    loading: true,
    error: null,
  });
};

const getUsersSuccess = (state, action) => {
  return updateObject(state, {
    users: action.users,
    loading: false,
    error: null,
  });
};

const getUsersFail = (state, action) => {
  return updateObject(state, {
    users: [],
    loading: false,
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return getUsersStart(state, action);
    case GET_USERS_SUCCESS:
      return getUsersSuccess(state, action);
    case GET_USERS_FAIL:
      return getUsersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
