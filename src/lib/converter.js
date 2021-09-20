export function toFehrenheit (fehrenheit) {
  return ((fehrenheit - 32) * 5) / 9
}
export function toCelsius (celsius) {
  return (celsius * 9) / 5 + 32
}

export function convert (temperature, convertTo) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convertTo(input)
  const rounder = Math.floor((output * 1000) / 1000)
  return rounder.toString()
}
