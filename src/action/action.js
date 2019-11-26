import {
  RETRIEVE_MOVIES_GENRES_REQUEST,
  RETRIEVE_MOVIES_GENRES_SUCCESS,
  RETRIEVE_MOVIES_GENRES_ERROR,
  RETRIEVE_POPULAR_MOVIES_REQUEST,
  RETRIEVE_POPULAR_MOVIES_SUCCESS,
  RETRIEVE_POPULAR_MOVIES_ERROR,
  RETRIEVE_NOWPLAYING_MOVIES_REQUEST,
  RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
  RETRIEVE_NOWPLAYING_MOVIES_ERROR,
  RETRIEVE_MOVIES_LIST_REQUEST,
  RETRIEVE_MOVIES_LIST_SUCCESS,
  RETRIEVE_MOVIES_LIST_ERROR,
  RETRIEVE_MOVIE_DETAILS_REQUEST,
  RETRIEVE_MOVIE_DETAILS_SUCCESS,
  RETRIEVE_MOVIE_DETAILS_ERROR,
  RETRIEVE_MOVIES_SEARCH_RESULT_REQUEST,
  RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS,
  RETRIEVE_MOVIES_SEARCH_RESULT_ERROR,
} from './actionType';

export function movieGenresRequest(data) {
  return {
    type: RETRIEVE_MOVIES_GENRES_REQUEST,
    data,
  };
}

export function movieGenresSuccess(data) {
  return {
    type: RETRIEVE_MOVIES_GENRES_SUCCESS,
    data,
  };
}
export function movieGenresError(data) {
  return {
    type: RETRIEVE_MOVIES_GENRES_ERROR,
    data,
  };
}

export function popularMovieRequest(data) {
  return {
    type: RETRIEVE_POPULAR_MOVIES_REQUEST,
    data,
  };
}

export function popularMovieSuccess(data) {
  return {
    type: RETRIEVE_POPULAR_MOVIES_SUCCESS,
    data,
  };
}

export function popularMovieError(data) {
  return {
    type: RETRIEVE_POPULAR_MOVIES_ERROR,
    data,
  };
}

export function nowPlayingRequest(data) {
  return {
    type: RETRIEVE_NOWPLAYING_MOVIES_REQUEST,
    data,
  };
}
export function nowPlayingSuccess(data) {
  return {
    type: RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
    data,
  };
}
export function nowPlayingError(data) {
  return {
    type: RETRIEVE_NOWPLAYING_MOVIES_ERROR,
    data,
  };
}

export function movieListRequest(data) {
  return {
    type: RETRIEVE_MOVIES_LIST_REQUEST,
    data,
  };
}

export function movieListSuccess(data) {
  return {
    type: RETRIEVE_MOVIES_LIST_SUCCESS,
    data,
  };
}

export function movieListError(data) {
  return {
    type: RETRIEVE_MOVIES_LIST_ERROR,
    data,
  };
}

export function movieDetailsRequest(data) {
  return {
    type: RETRIEVE_MOVIE_DETAILS_REQUEST,
    data,
  };
}

export function movieDetailsSuccess(data) {
  return {
    type: RETRIEVE_MOVIE_DETAILS_SUCCESS,
    data,
  };
}

export function movieDetailsError(data) {
  return {
    type: RETRIEVE_MOVIE_DETAILS_ERROR,
    data,
  };
}

export function movieSearchRequest(data) {
  return {
    type: RETRIEVE_MOVIES_SEARCH_RESULT_REQUEST,
    data,
  };
}
export function movieSearchSuccess(data) {
  return {
    type: RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS,
    data,
  };
}

export function movieSearchError(data) {
  return {
    type: RETRIEVE_MOVIES_SEARCH_RESULT_ERROR,
    data,
  };
}
