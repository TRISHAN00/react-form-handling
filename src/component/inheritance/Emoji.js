import React, { Component } from 'react'

export default class Emoji extends Component {
  addEmoji = (emoji, text) => `${emoji} ${text} ${emoji}`
  render (decoratedText) {
    let text = 'I am Javascript Progrmmer'

    if (decoratedText) text = decoratedText

    return <div>{text}</div>
  }
}
