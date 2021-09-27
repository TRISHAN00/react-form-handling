import React from 'react'

function ClickCounter ({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Increse Value No. : {count}</button>
    </div>
  )
}

export default ClickCounter
