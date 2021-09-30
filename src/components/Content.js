import React from 'react'
import ClickCounter from './ClickCounter'
import Counter from './Counter'

function Content ({ theme }) {
  return (
    <div>
      <h2>This is a content component</h2>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
          />
        )}
      </Counter>
    </div>
  )
}

export default Content
