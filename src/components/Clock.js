import React, { useEffect, useState } from 'react'

function Clock () {
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    // cleanup time interval
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Clock
