/* eslint-disable no-undef */
 const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3)
  expect(sum.sum(1, 2.222222)).not.toBeGreaterThan(4)
  expect(sum.sum(1, 2.222222)).toBeLessThanOrEqual(4)
  expect(sum.sum(1, 2.222222)).toBeCloseTo(3.22)
})

test('convertFromMeterToJard test', () => {
  const expected_10 = sum.convert(10, sum.convertFromMeterToJard)
  expect(expected_10).toBeCloseTo(10.936133, 5)

  const expected_20 = sum.convert(20, sum.convertFromMeterToJard)
  expect(expected_20).toBeCloseTo(21.872266, 5)

  const expected_30 = sum.convert(30, sum.convertFromMeterToJard)
  expect(expected_30).toBeCloseTo(32.808399, 5)

  
  const expected_40 = sum.convert(40, sum.convertFromMeterToJard)
  expect(expected_40).toBeCloseTo(43.7445319, 5)

  const mockCallback = jest.fn(x => x * 0.2)
  const expected_to_call = sum.convert(40, mockCallback)
  expect(mockCallback).toHaveBeenCalled()
  expect(mockCallback).toHaveBeenCalledTimes(1)

  expect(mockCallback).toBeCalledWith(40)
  expect(mockCallback).toHaveReturnedTimes(1)
  expect(mockCallback).toHaveReturnedWith(8)
  expect(mockCallback).toHaveReturned()

  expect(mockCallback.mock.calls.length).toBe(1)
  expect(mockCallback.mock.calls[0][0]).toBe(40) // first argument of the first call
  expect(mockCallback.mock.results.length).toBe(1)
  const expectedMockValue = 40 * 0.2
  expect(mockCallback.mock.results[0].value).toBe(expectedMockValue)
})
