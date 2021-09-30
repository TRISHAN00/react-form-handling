import React from 'react'
import withCount from './HOC/withCount'

function HoverCounter ({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hover {count} Value</h1>
    </div>
  )
}

export default withCount(HoverCounter)
