import React, { Component } from 'react'
import { Button, Checkbox, Row, Col } from 'antd'

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
        <Button onClick={this.toggleDisplay}>
          {displayFilters ? 'Hide' : 'Show'} Filters
        </Button>
        {displayFilters && (
          <Row type="flex">
            {filters.map(({ name, value }) => (
              <Col key={name} span={4}>
                <Checkbox
                  name={name}
                  checked={value}
                  onChange={this.toggleFilter}
                >
                  {name}
                </Checkbox>
              </Col>
            ))}
          </Row>
        )}
      </div>
    )
  }
}

export default Filters
