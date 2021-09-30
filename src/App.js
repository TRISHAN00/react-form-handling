import React, { Component } from 'react'
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
        <Section theme={theme} />
      </div>
    )
  }
}
