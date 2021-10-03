import React, { useState } from 'react'

function TodoHook () {
  const [todo, setTodo] = useState('')
  const [warning, setWarning] = useState('')

  const todoHandler = e => {
    const inputValue = e.target.value
    const warning = inputValue.includes('JS')
      ? `Dont write js in the box`
      : null

    setTodo(inputValue)
    setWarning(warning)
  }

  return (
    <div>
      <h3>{todo}</h3>
      <textarea onChange={todoHandler} cols='30' rows='4'></textarea>
      <h1>{warning}</h1>
    </div>
  )
}

export default TodoHook
