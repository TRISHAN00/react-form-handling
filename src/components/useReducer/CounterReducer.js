import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1

    case 'decrement':
      return state - 1

    default:
      return state
  }
}

function CounterReducer () {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick={() => dispatch('decrement')} type='button'>
        Decrement-
      </button>
      <button onClick={() => dispatch('increment')} type='button'>
        Increment+
      </button>
    </div>
  )
}

export default CounterReducer
