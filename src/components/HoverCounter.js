import React from 'react'
import withCounter from './HOC/withCounter'

function HoverCounter ({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hover Count {count} time</h1>
    </div>
  )
}

export default withCounter(HoverCounter)
