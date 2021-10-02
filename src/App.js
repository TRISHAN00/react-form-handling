import React, { Component } from 'react'
import ClickComponent from './components/ClickComponent'
import Counter from './components/Counter'
import Section from './components/Section'

export default class App extends Component {
  render () {
    return (
      <div>
        <Counter>
          {(count, incremenetCount) => (
            <ClickComponent count={count} incremenetCount={incremenetCount} />
          )}
        </Counter>
        <Section />
      </div>
    )
  }
}
