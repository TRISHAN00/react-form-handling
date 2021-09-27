import React from 'react'
import withCounter from './HOC/withCounter'

function HoverCount ({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={this.incrementCount}>Hover {count} value</h1>
    </div>
  )
}

export default withCounter(HoverCount)
