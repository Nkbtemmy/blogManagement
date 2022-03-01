import { updateObject } from "../../shared/utility";
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "../actions/actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const getPostsStart = (state, action) => {
  return updateObject(state, {
    posts: [],
    loading: true,
    error: null,
  });
};

const getPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    loading: false,
    error: null,
  });
};

const getPostsFail = (state, action) => {
  return updateObject(state, {
    posts: [],
    loading: false,
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return getPostsStart(state, action);
    case GET_POSTS_SUCCESS:
      return getPostsSuccess(state, action);
    case GET_POSTS_FAIL:
      return getPostsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
