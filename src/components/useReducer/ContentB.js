import React, { useContext } from 'react'
import { counterContext } from './UseReducerContext'

function ContentB () {
  const countContext = useContext(counterContext)

  return (
    <div>
      <h1>Content B</h1>

      <button onClick={() => countContext.dispatch('increment')} type='button'>
        Increment
      </button>
      <button onClick={() => countContext.dispatch('decrement')} type='button'>
        Decrement
      </button>
    </div>
  )
}

export default ContentB
