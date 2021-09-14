import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  render () {
    const { date } = this.state
    return (
      <h1 className='heading'>
        <span className='text'>
          Hello {this.props.children}{' '}
          {date.toLocaleTimeString(this.props.local)}
        </span>
      </h1>
    )
  }
}

export default Clock
