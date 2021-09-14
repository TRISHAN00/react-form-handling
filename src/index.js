import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  render () {
    return (
      <h1 className='heading'>
        <span className='text'>
          Hello {this.props.children}{' '}
          {new Date().toLocaleTimeString(this.props.local)}
        </span>
      </h1>
    )
  }
}

ReactDOM.render(
  <Clock local='bn-BD'>TEST</Clock>,
  document.getElementById('root')
)
