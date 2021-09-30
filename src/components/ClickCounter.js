import React from 'react'
import withCount from './HOC/withCount'

function ClickCounter ({ count, incrementCount }) {
  return (
    <div>
      <h1>count value is : {count}</h1>
      <button onClick={incrementCount} type='button'>
        click
      </button>
    </div>
  )
}

export default withCount(ClickCounter)
