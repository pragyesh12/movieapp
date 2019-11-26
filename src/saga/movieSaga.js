import {put, call, takeLatest} from 'redux-saga/effects';
import {request} from '../utils/request';
import {TMDB_URL, TMDB_API_KEY} from '../utils/api';
import {
  RETRIEVE_MOVIES_GENRES_REQUEST,
  RETRIEVE_POPULAR_MOVIES_REQUEST,
  RETRIEVE_NOWPLAYING_MOVIES_REQUEST,
  RETRIEVE_MOVIES_LIST_REQUEST,
  RETRIEVE_MOVIE_DETAILS_REQUEST,
  RETRIEVE_MOVIES_SEARCH_RESULT_REQUEST,
} from '../action/actionType';
import {
  popularMovieSuccess,
  popularMovieError,
  nowPlayingError,
  nowPlayingSuccess,
  movieGenresSuccess,
  movieGenresError,
  movieListSuccess,
  movieListError,
  movieDetailsSuccess,
  movieDetailsError,
  movieSearchError,
  movieSearchSuccess,
} from '../action/action';
function* popularMovieWorkingSaga(action) {
  const url = `${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${
    action.data
  }`;
  try {
    const response = yield call(request, url);
    yield put(popularMovieSuccess(response.results));
  } catch (err) {
    yield put(popularMovieError(err));
  }
}
function* nowPlayingMovieSaga(action) {
  const url = `${TMDB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${
    action.data
  }`;
  try {
    const response = yield call(request, url);
    yield put(nowPlayingSuccess(response.results));
  } catch (err) {
    yield put(nowPlayingError(err));
  }
}
function* genresMovieSaga() {
  const url = '';
  try {
    const response = yield call(request, url);
    yield put(movieGenresSuccess(response));
  } catch (err) {
    yield put(movieGenresError(err));
  }
}
function* movieListSaga(action) {
  const url = `${TMDB_URL}/movie/popular/?api_key=${TMDB_API_KEY}&page=${
    action.data
  }`;
  try {
    const response = yield call(request, url);
    yield put(movieListSuccess(response.results));
  } catch (err) {
    yield put(movieListError(err));
  }
}
function* movieDetailsSaga(action) {
  const url = `${TMDB_URL}/movie/${action.data}?api_key=${TMDB_API_KEY}`;
  try {
    const response = yield call(request, url);
    console.log(response);
    yield put(movieDetailsSuccess(response));
  } catch (err) {
    yield put(movieDetailsError(err));
  }
}
function* movieSearchResultSaga(action) {
  const url = `${TMDB_URL}/search/movie/?api_key=${TMDB_API_KEY}&query=${
    action.data
  }&page=${1}`;
  try {
    const response = yield call(request, url);
    yield put(movieSearchSuccess(response.results));
  } catch (err) {
    yield put(movieSearchError(err));
  }
}
export function* movieSaga() {
  yield takeLatest(RETRIEVE_POPULAR_MOVIES_REQUEST, popularMovieWorkingSaga);
  yield takeLatest(RETRIEVE_NOWPLAYING_MOVIES_REQUEST, nowPlayingMovieSaga);
  yield takeLatest(RETRIEVE_MOVIES_GENRES_REQUEST, genresMovieSaga);
  yield takeLatest(RETRIEVE_MOVIES_LIST_REQUEST, movieListSaga);
  yield takeLatest(RETRIEVE_MOVIE_DETAILS_REQUEST, movieDetailsSaga);
  yield takeLatest(
    RETRIEVE_MOVIES_SEARCH_RESULT_REQUEST,
    movieSearchResultSaga,
  );
}
