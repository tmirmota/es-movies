import React from 'react'
import { Input } from 'antd'

const SearchInput = ({ search }) => (
  <Input.Search
    name="search"
    onSearch={value => search(value)}
    placeholder="Search for a movie title"
    type="text"
  />
)

export default SearchInput
