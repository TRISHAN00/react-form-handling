const array = [1, 2, 3, 4]

const reducer = (prevValue, currentValue) => prevValue + currentValue

const output = array.reduce(reducer, 5)

console.log(output)
