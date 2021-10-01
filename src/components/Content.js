import React from 'react'
import ClickCounter from './ClickCounter'
import ThemeContext from './contexts/themeContext'
import Counter from './Counter'

function Content () {
  return (
    <div>
      <h2>This is a content component</h2>
      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <ClickCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          )
        }}
      </Counter>
    </div>
  )
}

export default Content
