import * as types from '../constants/ActionTypes'

export const fetchMoviesSuccess = movies => async dispatch => {
    dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: movies })
}
