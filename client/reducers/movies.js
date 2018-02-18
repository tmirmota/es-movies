import * as types from '../constants/ActionTypes'

const movies = (state = null, action) => {
  switch(action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return action.payload

    default:
      return state
  }
}

export default movies