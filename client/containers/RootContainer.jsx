import React from 'react'
import { connect } from 'react-redux'
import Root from '../components/Root'
import { fetchMovies } from '../actions/MovieActions'

const RootComponent = props => <Root {...props} />

export default connect(null, { fetchMovies })(RootComponent)