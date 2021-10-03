import React, { Component } from 'react'

export default class MyComponentClass extends Component {
  state = {
    count: 0,
    date: new Date()
  }

  componentDidMount () {
    const { count } = this.state
    document.title = `clicked ${count} time`
  }

  addClick = () => {
    this.setState(count => ({ count: count + 1 }))
  }

  render () {
    const { date } = this.state
    return (
      <div>
        <p>Time : {date.toLocaleTimeString()} </p>
        <p>
          <button onClick={this.addClick} type='button'>
            Click
          </button>
        </p>
      </div>
    )
  }
}
