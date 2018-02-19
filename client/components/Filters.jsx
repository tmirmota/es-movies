import React, { Component } from 'react'

class Filters extends Component {
  state = {
    displayFilters: false,
  }
  toggleDisplay = () => {
    this.setState({ displayFilters: !this.state.displayFilters })
  }
  toggleFilter = ev => {
    const { name, checked } = ev.target
    console.log(name, checked)
    this.props.toggleFilter(name, checked)
  }
  render() {
    const { filters } = this.props
    const { displayFilters } = this.state
    return (
      <div>
        <button onClick={this.toggleDisplay}>
          {displayFilters ? 'Hide' : 'Show'} Filters
        </button>
        {displayFilters &&
          filters.map(({ name, value }) => (
            <div key={name}>
              <label>
                {name}
                <input
                  name={name}
                  checked={value}
                  onChange={this.toggleFilter}
                  type="checkbox"
                />
              </label>
            </div>
          ))}
      </div>
    )
  }
}

export default Filters
