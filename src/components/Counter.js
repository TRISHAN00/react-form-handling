import React, { useState } from 'react'

function Counter () {
  const [count, setcount] = useState(0)

  const incrementCount = () => {
    setcount(prevState => prevState + 1)
  }

  const incrementCountFive = () => {
    setcount(prevState => prevState + 5)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Add 1</button>
      <button onClick={incrementCountFive}>Add 5</button>
    </div>
  )
}

export default Counter
