import { Component } from 'react'

export default class Emoji extends Component {
  addEmoji = (emoji, text) => `${emoji} ${text} ${emoji}`

  render () {
    return this.props.children({ addEmoji: this.addEmoji })
  }
}
