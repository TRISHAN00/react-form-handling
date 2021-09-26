import { Component } from 'react'
import Text from './Text'

export default class Emoji extends Component {
  addEmoji = (text, emoji) => `${text} ${emoji} ${text}`
  render () {
    let text = 'I am the Emoji Component'
    return (
      <div>
        <h1>{text}</h1>
        <Text addEmoji={this.addEmoji} />
      </div>
    )
  }
}
