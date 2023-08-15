import { getRandomStringFromArray } from '../getRandomStringFromArray'

describe('getRandomStringFromArray', () => {
  it('returns a random string from the given array', () => {
    const array = ['apple', 'banana', 'cherry', 'date']

    const randomString1 = getRandomStringFromArray(array)
    expect(array.includes(randomString1)).toBe(true)

    const randomString2 = getRandomStringFromArray(array)
    expect(array.includes(randomString2)).toBe(true)

    const randomString3 = getRandomStringFromArray(array)
    expect(array.includes(randomString3)).toBe(true)

    const randomString4 = getRandomStringFromArray(array)
    expect(array.includes(randomString4)).toBe(true)

    const randomString5 = getRandomStringFromArray(array)
    expect(array.includes(randomString5)).toBe(true)
  })
})
