import React from 'react'

class Clock extends React.Component {
  state = { date: new Date() }

  componentDidMount () {
    this.clearInterval = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.clearInterval)
  }

  tick () {
    this.setState({
      date: new Date()
    })
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
