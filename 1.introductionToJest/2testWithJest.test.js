const getTotalPrice = require('./2testWithJest')

test('function will return total price correctly', () => {
    const result = getTotalPrice(100000, 20)
    expect(result).toBe('Rp. 70.000')
})

test('will return error if argument invalid', () => {
    const result = getTotalPrice(100000, 'invalid')
    expect(result).toBe('Error, invalid arguments')
})
