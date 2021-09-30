import React from 'react'

function HoverCounter ({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hover {count} Value</h1>
    </div>
  )
}

export default HoverCounter
