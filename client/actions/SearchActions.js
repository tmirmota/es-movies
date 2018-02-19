import * as types from '../constants/ActionTypes'

export const searchTitle = value => ({
  type: types.SEARCH_TITLE, payload: value
})

export const toggleGenre = (name, value) => ({
  type: types.TOGGLE_GENRE, name, payload: value
})