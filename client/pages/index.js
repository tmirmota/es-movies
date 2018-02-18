import React, { Component } from 'react'
import { callApi } from '../utils/ApiUtils'
import { MOVIES_LIST_URL } from '../constants/ApiConstants'

export default class extends Component {
  static async getInitialProps({ req }) {
    const { json } = await callApi(MOVIES_LIST_URL)
    return { movies: json }
  }
  render() {
    const { movies } = this.props
    console.log(movies.length)

    return <div>This many movies {movies.length}</div>
  }
}
