import React from 'react'
import SearchInput from '../components/SearchInput'
import Filters from '../components/Filters'

export default props => {
  const { movies, activeMovies, search, searchTitle, toggleGenre } = props
  return (
    <div>
      <SearchInput search={searchTitle} value={search.value} />
      <Filters filters={search.genres} toggleFilter={toggleGenre} />
      <div>Total number of movies in list: {movies.length}</div>
      <div>Total number of movies in list: {activeMovies.length}</div>
      {activeMovies.map((movie, index) => {
        const { title, genre } = movie
        return (
          <div key={index}>
            <div>
              Title: <strong>{title}</strong>
              <br />
              {genre && <div>Genre: {genre}</div>}
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}
