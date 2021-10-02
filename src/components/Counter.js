import React, { useState } from 'react'
import ClickComponent from './ClickComponent'
import HoverComponent from './HoverComponent'

function Counter () {
  const [count, setcount] = useState(0)

  const incrementCount = () => {
    setcount(count + 1)
  }
  return (
    <div>
      <ClickComponent count={count} incrementCount={incrementCount} />
      <HoverComponent count={count} incrementCount={incrementCount} />
    </div>
  )
}

export default Counter
