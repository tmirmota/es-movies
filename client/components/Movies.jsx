import React from 'react'
import SearchInput from '../components/SearchInput'
import Filters from '../components/Filters'
import { Row, Col, Card } from 'antd'

export default props => {
  const { movies, activeMovies, search, searchTitle, toggleGenre } = props
  return (
    <Row type="flex" justify="center">
      <Col span={8}>
        <SearchInput search={searchTitle} />
        {search.title && `You searched for: ${search.title}`}
      </Col>
      <Col span={20}>
        <Filters filters={search.genres} toggleFilter={toggleGenre} />
        <div>Total number of movies in list: {movies.length}</div>
        <div>Total number of movies in list: {activeMovies.length}</div>
        <Row type="flex" justify="center" gutter={16}>
        {activeMovies.map((movie, index) => {
          const { title, genre, director, cast, year, notes } = movie
          return (
            <Col key={index} span={8}>
              <Card title={title}>
              <div>
                {genre && <div>Genre: {genre}</div>}
                {director && <div>Director: {director}</div>}
                {cast && <div>Cast: {cast}</div>}
                {year && <div>Year: {year}</div>}
                {notes && <div>Notes: {notes}</div>}
              </div>
              </Card>
            </Col>
          )
        })}
        </Row>
      </Col>
    </Row>
  )
}
