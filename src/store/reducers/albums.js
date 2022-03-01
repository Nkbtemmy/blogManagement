import { updateObject } from "../../shared/utility";
import {
  GET_ALBUMS_START,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL,
} from "../actions/actionTypes";

const initialState = {
  albums: [],
  loading: false,
  error: null,
};

const getAlbumsStart = (state, action) => {
  return updateObject(state, {
    albums: [],
    loading: true,
    error: null,
  });
};

const getAlbumsSuccess = (state, action) => {
  return updateObject(state, {
    albums: action.albums,
    loading: false,
    error: null,
  });
};

const getAlbumsFail = (state, action) => {
  return updateObject(state, {
    albums: [],
    loading: false,
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_START:
      return getAlbumsStart(state, action);
    case GET_ALBUMS_SUCCESS:
      return getAlbumsSuccess(state, action);
    case GET_ALBUMS_FAIL:
      return getAlbumsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
