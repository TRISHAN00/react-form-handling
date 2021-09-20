import React, { Component } from 'react'

const scaleNames = {
  c: 'celsius',
  f: 'fehrenheit'
}

export default class TemperatureInput extends Component {
  render () {
    const { scale, temperature, handleTemperatureCahange } = this.props
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]} </legend>
          <input
            type='text'
            name='celsius'
            id='celsius'
            value={temperature}
            onChange={e => handleTemperatureCahange(e, scale)} 
          />
        </fieldset>
      </div>
    )
  }
}
