import React, { useEffect, useState } from 'react'

function MyComponent () {
  const [count, setcount] = useState(0)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    document.title = `the value is ${count}`
  })

  const tick = () => {
    setDate(new Date())
  }

  setInterval(() => tick(), 1000)

  const incrementCount = () => {
    setcount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <p>Time : {date.toLocaleTimeString()} </p>
      <button onClick={incrementCount}>Click</button>
      <h1>My Component</h1>
    </div>
  )
}

export default MyComponent
