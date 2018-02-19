import React, { Component } from 'react'

class SearchInput extends Component {
  handleChange = ev => {
    const { value, name } = ev.target
    this.props.search(value)
  }
  render() {
    return (
      <input
        name='search'
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default class extends Component {
  render() {
    const { movies, activeMovies, search, searchTitle } = this.props
    return (
      <div>
        <SearchInput search={searchTitle} value={search.value} />
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
              <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}
