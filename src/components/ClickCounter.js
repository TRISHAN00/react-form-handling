import React, { Component } from 'react'

export default class ClickCounter extends Component {
  state = { count: 0 }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render () {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.incrementCount}>
          Increse Value No. : {count}
        </button>
      </div>
    )
  }
}