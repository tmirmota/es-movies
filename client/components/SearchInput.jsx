import React from 'react'

const SearchInput = ({ value, search }) => (
  <input
    name="search"
    value={value}
    onChange={ev => search(ev.target.value)}
  />
)

export default SearchInput
