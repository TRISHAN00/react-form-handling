import React from 'react'

function HoverComponent ({ count, incremenetCount }) {
  return (
    <div>
      <h1 onMouseOver={incremenetCount}>Hover {count} Value</h1>
    </div>
  )
}

export default HoverComponent
