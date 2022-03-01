import axiosBase from "../../axios-base";
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "./actionTypes";

export const getPostsStart = () => {
  return {
    type: GET_POSTS_START,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    error: error,
  };
};

export const getPosts = (userId) => {
  return (dispatch) => {
    dispatch(getPostsStart());
    axiosBase
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        dispatch(getPostsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostsFail(err));
      });
  };
};
