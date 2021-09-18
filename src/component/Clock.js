import React from 'react'

class Clock extends React.Component {
  state = { date: new Date(), local: 'bn-BD' }

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

  handleClicked = local => {
    this.setState({
      local: local
    })
  }

  render () {
    const { date, local } = this.state

    return (
      <h1 className='heading'>
        <span className='text'>
          Hello {this.props.children} {date.toLocaleTimeString(local)}
          <button onClick={() => this.handleClicked('en-US')}>
            Click Here
          </button>
        </span>
      </h1>
    )
  }
}

export default Clock