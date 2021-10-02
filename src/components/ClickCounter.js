import React, { Component } from 'react'

export default class ClickCounter extends Component {
  // state declare
  state = { count: 0 }

  //  handler increse value
  increaseCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render () {
    //   destructuring
    const { count } = this.state

    // JSX returning part
    return (
      <div>
        <h2>Increase {count} value</h2>
        <button onClick={this.increaseCount}>Increse</button>
      </div>
    )
  }
}
