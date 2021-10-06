import React, { useReducer } from 'react'

const initialState = {
  counter: 0,
  counter2: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    case 'increment2':
      return { ...state, counter2: state.counter2 + 1 }
    case 'decrement2':
      return { ...state, counter2: state.counter2 - 1 }
    default:
      return state
  }
}

function ComplexCounter () {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Counte : {count.counter}</h2>
      <button
        onClick={() =>
          dispatch({
            type: 'increment'
          })
        }
      >
        Increment by 1
      </button>

      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement by 1
      </button>

      {/* icnrement or decrement 2 */}
      <h2>Counte : {count.counter2}</h2>
      <button
        onClick={() =>
          dispatch({
            type: 'increment2'
          })
        }
      >
        Increment by 1
      </button>

      <button onClick={() => dispatch({ type: 'decrement2' })}>
        Decrement by 1
      </button>
    </div>
  )
}

export default ComplexCounter
