import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
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
