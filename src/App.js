import React, { Component } from 'react'
import ThemeContext from './components/contexts/themeContext'
import Counter from './components/Counter'
import HoverCounter from './components/HoverCounter'
import Section from './components/Section'

export default class App extends Component {
  state = { theme: 'dark' }

  render () {
    const { theme } = this.state
    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    )
  }
}
