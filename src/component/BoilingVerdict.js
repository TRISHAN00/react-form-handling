export default function BoilingVerdict ({ celsius = 0 }) {
  if (celsius >= 100) {
    return <span>Water would boil</span>
  } else {
    return <span>Water would not boil</span>
  }
}
