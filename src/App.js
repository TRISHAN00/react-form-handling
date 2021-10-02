import React, { Component } from 'react'
import ClickComponent from './components/ClickComponent'
import ThemeContext from './components/contexts/themeContext'
import Counter from './components/Counter'
import Section from './components/Section'

export default class App extends Component {
  state = { theme: 'dark' }
  render () {
    const { theme } = this.state
    return (
      <div>
        <Counter>
          {(count, incremenetCount) => (
            <ClickComponent count={count} incremenetCount={incremenetCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    )
  }
}
