import React from 'react'
import withCounter from './HOC/withCounter'

function ClickCounter ({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount} type='button'>
        clicked {count} time
      </button>
    </div>
  )
}

export default withCounter(ClickCounter)
