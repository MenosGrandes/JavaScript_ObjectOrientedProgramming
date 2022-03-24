/* eslint-disable no-undef */
// https://obfuscator.io/ USE THIS!

const functions = require('./functions.obs.js')

test('get all event numbers', () => {
  const expected = [[0, 10, 6], [0, 13, 7], [-151, 122, 137], [30, 5122, 2547], [5432, 699347, 346958]]
  for (let i = 0; i < expected.length; i++) {
    const numbers = functions.getEvenNumbers(expected[i][0], expected[i][1])
    expect(numbers).toEqual((expected[i][2]))
  }
})

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

test('toUpper test', () => {
  function makeid (length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength))
    }
    return [result, characters[getRandomInt(0, characters.length)]]
  }

  for (let i = 0; i < 1000; i++) {
    const r = makeid(getRandomInt(0, 100))
    const output = functions.getOccurencesOfChar(r[1], r[0])
    const result = [...r[0]].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})
    const x = (typeof result[r[1]] === 'undefined') ? 0 : result[r[1]]
    expect(x).toEqual(output)
  }
})

test('moveVector test', () => {
  const scalar = 10
  const x = 2
  const y = 3.14
  const expected_x = 12
  const expected_y = 13.14
  const output = functions.moveVector(x, y, scalar)
  expect(output.x).toEqual(expected_x)
  expect(output.y).toEqual(expected_y)
})

test('arrayFunction', () => {
  const isEven = 'Is even'
  const notEven = 'Not even'
  min = 0
  max = getRandomInt(0, 1000)
  const random_val = getRandomInt(min, max)
  for (let i = 0; i < random_val; i++) {
    const expected = functions.arrayFunction(i)
    if (i % 2 == 0) {
      expect(expected()).toEqual(expect.stringMatching(isEven))
      expect(expected()).not.toEqual(expect.stringMatching(notEven))
    } else {
      expect(expected()).toEqual(expect.stringMatching(notEven))
      expect(expected()).not.toEqual(expect.stringMatching(isEven))
    }
  }
})

test('typof test', () => {
  const test_function = functions.switchFunction
  expect(test_function(2)).toEqual(expect.stringMatching('numb'))
  expect(test_function(true)).toEqual(expect.stringMatching('bool'))
  expect(test_function('FOX')).toEqual(expect.stringMatching('str'))
})
test('typof function test', () => {
  const test_function = functions.switchFunction
  min = 0
  max = Math.floor(1000)
  const random_val = getRandomInt(min, max)
  expect(test_function(() => { return random_val })).toEqual(random_val)
})

test('fibbonaciTest', () => {
  const test_function = functions.fibonacci
  const fibonnaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025, 20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920, 2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994, 190392490709135, 308061521170129, 498454011879264, 806515533049393, 1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757, 8944394323791464, 14472334024676221n, 23416728348467685n, 37889062373143906n, 61305790721611591n, 99194853094755497n, 160500643816367088n, 259695496911122585n, 420196140727489673n, 679891637638612258n, 1100087778366101931n, 1779979416004714189n, 2880067194370816120n, 4660046610375530309n, 7540113804746346429n, 12200160415121876738n, 19740274219868223167n, 31940434634990099905n, 51680708854858323072n, 83621143489848422977n, 135301852344706746049n, 218922995834555169026n]

  min = 0
  max = getRandomInt(0, 20)
  for (let i = 0; i < 1000; i++) {
    const randomFib = getRandomInt(min, max)
    expect(test_function(randomFib)).toEqual(fibonnaci[randomFib])
  }
})

test('factorial test', () => {
  const test_function = functions.factorialize

  min = 0
  max = getRandomInt(0, 20)

  const random_val = getRandomInt(min, max)
  const factor = [
    1,
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880,
    3628800,
    39916800,
    479001600,
    6227020800,
    87178291200,
    1307674368000,
    20922789888000,
    355687428096000,
    6402373705728000,
    2432902008176640000n
  ]

  for (let i = 0; i < 1000; i++) {
    const randomEnd = getRandomInt(min, max)
    expect(test_function(randomEnd)).toEqual(factor[randomEnd])
  }
})
test('returnPowerOf', () => {
  const test_function = functions.returnPowerOf
  expect(test_function(2)).toEqual(4)
})

test('convertFToC test', () => {
  const test_function = functions.convertFtoC
  expect(test_function(100)).toBeCloseTo(37.777777778, 5)
  expect(test_function(0)).toBeCloseTo(-17.777777778, 5)
  expect(test_function(22.3)).toBeCloseTo(-5.3888888889, 5)
})
