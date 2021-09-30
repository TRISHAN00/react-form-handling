import React from 'react'

function ClickCounter ({ count, incrementCount, theme }) {
  const style =
    theme === 'dark' ? { backgroundColor: '#000000', color: '#fff' } : null

  return (
    <div>
      <h1 style={style}>count value is : {count}</h1>
      <button onClick={incrementCount} type='button'>
        click
      </button>
    </div>
  )
}

export default ClickCounter
