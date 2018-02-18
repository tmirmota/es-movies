import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { fetchMoviesSuccess } from '../actions/MovieActions'

import { callApi } from '../utils/ApiUtils'
import { MOVIES_LIST_URL } from '../constants/ApiConstants'

import MoviesContainer from '../containers/MoviesContainer'

class Root extends Component {
  static async getInitialProps({ store }) {
    const { json } = await callApi(MOVIES_LIST_URL)
    if (json) {
      store.dispatch(fetchMoviesSuccess(json))
    }
  }
  render() {
    return <MoviesContainer />
  }
}

export default withRedux(initStore, null, { fetchMoviesSuccess })(Root)
