import axiosBase from "../../axios-base";
import {
  GET_ALBUMS_START,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL,
} from "./actionTypes";

export const getAlbumsStart = () => {
  return {
    type: GET_ALBUMS_START,
  };
};

export const getAlbumsSuccess = (albums) => {
  return {
    type: GET_ALBUMS_SUCCESS,
    albums: albums,
  };
};

export const getAlbumsFail = (error) => {
  return {
    type: GET_ALBUMS_FAIL,
    error: error,
  };
};

export const getAlbums = (userId) => {
  return (dispatch) => {
    dispatch(getAlbumsStart());
    axiosBase
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((res) => {
        dispatch(getAlbumsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAlbumsFail(err));
      });
  };
};
