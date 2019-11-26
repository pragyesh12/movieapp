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
} from '../action/actionType';
const initialState = {
  loading: true,
  isLoading: true,
  details: {},
  genres: [],
  list: {},
  nowPlayingMovies: {},
  popularMovies: {},
  searchResults: {},
  error: {},
};
export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_MOVIES_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_MOVIES_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.data,
      };
    case RETRIEVE_MOVIES_GENRES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case RETRIEVE_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: action.data,
      };
    case RETRIEVE_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case RETRIEVE_NOWPLAYING_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RETRIEVE_NOWPLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nowPlayingMovies: action.data,
      };
    case RETRIEVE_NOWPLAYING_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.data,
      };
    case RETRIEVE_MOVIES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.data,
      };
    case RETRIEVE_MOVIES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case RETRIEVE_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.data,
      };
    case RETRIEVE_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case RETRIEVE_MOVIES_SEARCH_RESULT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.data,
      };
    case RETRIEVE_MOVIES_SEARCH_RESULT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
}
