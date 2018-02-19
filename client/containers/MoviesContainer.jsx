import React from 'react'
import { connect } from 'react-redux'
import Movies from '../components/Movies'
import { searchTitle, toggleGenre } from '../actions/SearchActions'

const MoviesComponent = props => {
  const { movies, url } = props

  if (!movies) {
    return 'No movies found'
  }

  const queryPage = Number(url.query.page)
  const page = queryPage ? queryPage : 1

  const activeMovies = movies.slice(page * 10 - 10, page * 10)

  return <Movies {...props} activeMovies={activeMovies} page={page} />
}

const mapStateToProps = ({ movies, search }) => {
  const genresToRemove = search.genres.reduce((arr, genre) => {
    if (!genre.value) {
      arr.push(genre.name)
    }
    return arr
  }, [])

  const filteredMovies = movies.filter(movie => {
    const { title, genre } = movie
    let includesGenre = true
    let includesSearch = true

    // TODO: move over to toggle genre action
    if (genre) {
      for (let i = 0; i <= genresToRemove.length; i++) {
        if (genre.toLowerCase().indexOf(genresToRemove[i]) >= 0) {
          includesGenre = false
        }
      }
    } else {
      if (genresToRemove.indexOf('None') >= 0) {
        includesGenre = false
      }
    }

    if (search.title.length > 0) {
      includesSearch = title.toLowerCase().indexOf(search.title) !== -1
    }
    if (includesGenre && includesSearch) {
      return movie
    }
  })

  return {
    movies: filteredMovies,
    search,
  }
}

export default connect(mapStateToProps, { searchTitle, toggleGenre })(
  MoviesComponent,
)
