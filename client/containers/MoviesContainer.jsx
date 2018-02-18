import React from 'react'
import { connect } from 'react-redux'
import Movies from '../components/Movies'

const MoviesComponent = props => <Movies {...props} />

const mapStateToProps = ({ movies }) => ({ movies })

export default connect(mapStateToProps)(MoviesComponent)