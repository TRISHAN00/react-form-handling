import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  render () {
    return (
      <h1 className='heading'>
        <span className='text'>
          {new Date().toLocaleTimeString(this.props.local)}
        </span>
      </h1>
    )
  }
}

ReactDOM.render(<Clock local='bn-BD' />, document.getElementById('root'))
