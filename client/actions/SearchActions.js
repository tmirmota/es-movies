import * as types from '../constants/ActionTypes'

export const fetchGenresSuccess = movies => dispatch => {
  const genres = movies.reduce((arr, movie) => {
    const { genre } = movie

    let names = []
    if (genre) {
      names = genre
        .toLowerCase()
        .replace(',', '')
        .replace(',', '')
        .replace('/', ' ')
        .replace(']', '')
        .replace('[1]', '')
        .split(' ')
    } else {
      names = ['None']
    }

    names.map(name => {
      if (arr.map(obj => obj.name).indexOf(name) === -1) {
        arr.push({ name, value: true })
      }
    })

    return arr
  }, [])
  dispatch({ type: types.FETCH_GENRES_SUCCESS, payload: genres })
}

export const searchTitle = value => ({
  type: types.SEARCH_TITLE,
  payload: value,
})

export const toggleGenre = (name, value) => ({
  type: types.TOGGLE_GENRE,
  name,
  value,
})
