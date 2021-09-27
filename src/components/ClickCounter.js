import React from 'react'

function ClickCounter ({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount} type='button'>
        clicked {count} time
      </button>
    </div>
  )
}

export default ClickCounter
