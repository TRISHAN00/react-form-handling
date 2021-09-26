import Emoji from './Emoji'

export default class Text extends Emoji {
  render () {
    console.log()
    const decoratedText = this.addEmoji('emoji', 'text')
    return super.render(decoratedText)
  }
}
