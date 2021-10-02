import React from 'react'

function HoverComponent ({ count, incremenetCount, theme }) {
  const style =
    theme === 'dark'
      ? {
          backgroundColor: '#000',
          color: '#fff'
        }
      : null
  return (
    <div>
      <h1 style={style} onMouseOver={incremenetCount}>
        Hover {count} Value
      </h1>
    </div>
  )
}

export default HoverComponent
