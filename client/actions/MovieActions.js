import * as types from '../constants/ActionTypes'
import { fetchGenresSuccess } from './SearchActions'

export const fetchMoviesSuccess = movies => dispatch => {
  dispatch(fetchGenresSuccess(movies))
  dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: movies })
}
