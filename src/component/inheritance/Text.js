export default function Text ({ addEmoji }) {
  const text = 'I am Javascript Programmer'
  return <div>{addEmoji ? addEmoji('emoji', 'text') : text}</div>
}
