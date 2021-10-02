import React from 'react'
import Counter from './Counter'
import HoverComponent from './HoverComponent'

function Content () {
  return (
    <div>
      <h1>Content Component</h1>
      <Counter>
        {(count, incremenetCount) => (
          <HoverComponent count={count} incremenetCount={incremenetCount} />
        )}
      </Counter>
    </div>
  )
}

export default Content
