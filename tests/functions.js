function getEvenNumbers (from, to) {
  let amount = 0
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      amount += 1
    }
  }
  return amount
}

function getOccurencesOfChar (char, str) {
  let amount = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      amount++
    }
  }
  return amount
}

function moveVector (x, y, scalar) {
  x = x + scalar
  y = y + scalar
  return [x, y]
}

function arrayFunction (number) {
  if (number % 2 === 0) {
    return () => { return 'Is even' }
  }
  return () => { return 'Not even' }
}
function switchFunction (value) {
  switch (typeof value) {
    case 'string':
      return 'str'
    case 'number':
      return 'numb'
    case 'boolean':
      return 'bool'
    case 'function':
      return value()

    default:
      return 'undefined'
  }
}

function fibonacci (element) {
  if (element === 0) return 0
  if (element === 1) return 1

  return fibonacci(element - 2) + fibonacci(element - 1)
}

function factorialize (num) {
  let result = num
  if (num === 0 || num === 1) { return 1 }
  while (num > 1) {
    num--
    result *= num
  }
  return result
}
function returnPowerOf (number) {
  return number ** 2
}
function convertFtoC (temp) {
  const fToCel = (temp - 32) * 5 / 9
  return fToCel
}
module.exports = {}
module.exports.getEvenNumbers = getEvenNumbers
module.exports.getOccurencesOfChar = getOccurencesOfChar
module.exports.moveVector = moveVector
module.exports.arrayFunction = arrayFunction
module.exports.switchFunction = switchFunction
module.exports.fibonacci = fibonacci
module.exports.factorialize = factorialize
module.exports.returnPowerOf = returnPowerOf
module.exports.convertFtoC = convertFtoC
