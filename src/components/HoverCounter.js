import React from 'react'

function HoverCounter ({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hover Count {count} time</h1>
    </div>
  )
}

export default HoverCounter
