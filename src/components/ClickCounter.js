import React from 'react'
import withCounter from './HOC/withCounter'

function ClickCounter ({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Increse Value No. : {count}</button>
    </div>
  )
}

export default withCounter(ClickCounter)
