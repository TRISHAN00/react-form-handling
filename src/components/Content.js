import React from 'react'
import ThemeContext from './contexts/themeContext'
import Counter from './Counter'
import HoverComponent from './HoverComponent'

function Content () {
  return (
    <div>
      <h1>Content Component</h1>
      <Counter>
        {(count, incremenetCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <HoverComponent
                  count={count}
                  incremenetCount={incremenetCount}
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
