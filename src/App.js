import Emoji from './component/inheritance/Emoji'
import Text from './component/inheritance/Text'

export default function App () {
  return (
    <Emoji>
      {({ addEmoji }) => {
        ;<Text addEmoji={addEmoji} />
      }}
    </Emoji>
  )
}
