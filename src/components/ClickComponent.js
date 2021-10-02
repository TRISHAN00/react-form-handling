import React from 'react'

function ClickComponent ({ count, incremenetCount }) {
  return (
    <div>
      <h1>Increse {count} value</h1>
      <button onClick={incremenetCount}>Increse</button>
    </div>
  )
}

export default ClickComponent
