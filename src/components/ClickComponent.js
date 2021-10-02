import React from 'react'

function ClickComponent ({ count, incrementCount }) {
  return (
    <div>
      <h1>Increase The {count} value</h1>
      <button onClick={incrementCount}>Increase</button>
    </div>
  )
}

export default ClickComponent
