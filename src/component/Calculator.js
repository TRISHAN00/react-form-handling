import React, { Component } from 'react'
import { convert, toCelsius, toFehrenheit } from '../lib/converter'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

export default class Calculator extends Component {
  state = {
    temperature: '',
    scale: ''
  }

  handleTemperatureCahange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale
    })
  }

  render () {
    const { temperature, scale } = this.state
    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature
    const fehrenheit =
      scale === 'c' ? convert(temperature, toFehrenheit) : temperature
    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          handleTemperatureCahange={this.handleTemperatureCahange}
        />
        <TemperatureInput
          scale='c'
          temperature={fehrenheit}
          handleTemperatureCahange={this.handleTemperatureCahange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    )
  }
}
