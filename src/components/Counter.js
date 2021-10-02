import React, { Component } from 'react'

export default class Counter extends Component {
  // state declare
  state = { count: 0 }

  //  handler increse value
  increaseCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  render () {
    return (
      <div>
        <h1>Counter</h1>
      </div>
    )
  }
}
