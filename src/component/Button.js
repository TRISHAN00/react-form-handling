import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    return (
      <div>
        <button onClick={() => this.handleClicked('en-US')}>Click Here</button>
      </div>
    )
  }
}
