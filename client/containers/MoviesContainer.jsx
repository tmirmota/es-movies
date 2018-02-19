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

  // TODO: clean up logic
  const activeMovies = movies
    .filter(({ title }) => title.indexOf('Le') === -1)
    .slice(page * 10 - 10, page * 10)

  return <Movies {...props} activeMovies={activeMovies} page={page} />
}

const mapStateToProps = ({ movies, search }) => {
  let filteredMovies = movies
  if (search.title.length > 0) {
    filteredMovies = movies.filter(({ title }) => title.indexOf(search.title) !== -1)
  }
  return {
    movies: filteredMovies,
    search,
  }
}

export default connect(mapStateToProps, { searchTitle, toggleGenre })(
  MoviesComponent,
)
