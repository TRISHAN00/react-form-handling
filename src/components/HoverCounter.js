import React, { Component } from 'react'

export default class HoverCounter extends Component {
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
        <h1 onMouseOver={this.increaseCount}>
          HoverCounter Increse {count} value
        </h1>
      </div>
    )
  }
}
