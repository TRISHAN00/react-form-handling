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

function UseReducerThree () {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Counter Value : {count}</h1>
      <div>
        <button onClick={() => dispatch('increment')} type='button'>
          Increment
        </button>
        <button
          onClick={() => count !== 0 && dispatch('decrement')}
          type='button'
        >
          Decrement
        </button>
      </div>
      <div>
        <h1>Counter Value : {count2}</h1>
        <button onClick={() => dispatch2('increment')} type='button'>
          Increment
        </button>
        <button
          onClick={() => count2 !== 0 && dispatch2('decrement')}
          type='button'
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default UseReducerThree
