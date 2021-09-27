import React from 'react'
import ClickCounter from './components/ClickCounter'
import Counter from './components/Counter'
import HoverCount from './components/HoverCount'

export default function App () {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCount count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  )
}
