import React, { Component } from 'react'

export default class extends Component {
  render() {
    const { movies } = this.props
    console.log(movies)

    if (!movies) {
      return 'No movies found'
    }
    //
    // const moviesWithGenre = movies.filter(({ genre }) => genre !== null)
    // const moviesPerPage = 10
    //
    // const queryPage = Number(url.query.page)
    // const page = queryPage ? queryPage : 1
    //
    // console.log(page)
    //
    // const activeMovies = movies.slice(0,10)

    return (
      <div>
        <div>Total number of movies in list: {movies.length}</div>
        {/*<div>Number of movies with a genre: {moviesWithGenre.length}</div>*/}
        {/*<div>Number of movies on page: {activeMovies.length}</div>*/}
        {/*{activeMovies.map((movie, index) => {*/}
          {/*const { title } = movie*/}
          {/*const id = index + 1*/}
          {/*if (index >= 50) return false*/}
          {/*return (*/}
            {/*<div key={index}>*/}
              {/*<p>*/}
                {/*Title: <strong>{title}</strong>*/}
                {/*<br />*/}
                {/*Number: <strong>{id}</strong>*/}
              {/*</p>*/}
            {/*</div>*/}
          {/*)*/}
        {/*})}*/}
        {/*<Link href={{ pathname: '/', query: { page: 2 } }}>*/}
          {/*<a>Next Page</a>*/}
        {/*</Link>*/}
      </div>
    )
  }
}