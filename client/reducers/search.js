import * as types from '../constants/ActionTypes'

const initialState = {
  title: '',
  genres: [],
}

const genres = (state = [], action) => {
  switch (action.type) {
    case types.TOGGLE_GENRE:
      return [
        ...state.filter(({ name }) => name !== action.name),
        { name: action.name, value: action.value },
      ]

    default:
      return state
  }
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      }

    case types.SEARCH_TITLE:
      return {
        ...state,
        title: action.payload,
      }

    case types.TOGGLE_GENRE:
      return {
        ...state,
        genres: genres(state.genres, action),
      }

    default:
      return state
  }
}

export default search
