import React, { createContext, useReducer } from 'react'
import ContentA from './ContentA'

export const counterContext = createContext()

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

function UseReducerContext () {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Counter Value : {count}</h1>
      <counterContext.Provider value={{ dispatch: dispatch }}>
        <ContentA />
      </counterContext.Provider>
    </div>
  )
}

export default UseReducerContext
