import * as types from '../constants/ActionTypes'

const initialState = {
  title: '',
  genres: [],
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TITLE:
      return {
        ...state,
        title: action.payload,
      }

    case types.TOGGLE_GENRE:
      return {
        ...state,
        genres: [
          ...state,genres,
          [action.name]: action.payload
        ]
      }

    default:
      return state
  }
}

export default search
