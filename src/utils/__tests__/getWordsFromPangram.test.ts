import { getWordsFromPangram } from '../getWordsFromPangram'

const mockData = {
  apple: 1,
  banana: 1,
  cherry: 1,
  date: 1,
}

describe('getWordsFromPangram', () => {
  it('returns expected words when center letter is d', () => {
    const pangram = 'abcednt'
    const centerLetter = 'd'
    const result = getWordsFromPangram(pangram, centerLetter, mockData)

    expect(result).toContain('date')
    expect(result).not.toContain('banana')
    expect(result).not.toContain('apple')
    expect(result).not.toContain('cherry')
  })

  it('returns expected words when center letter is a', () => {
    const pangram = 'abcednt'
    const centerLetter = 'a'
    const result = getWordsFromPangram(pangram, centerLetter, mockData)

    expect(result).toContain('date')
    expect(result).toContain('banana')
    expect(result).not.toContain('apple')
    expect(result).not.toContain('cherry')
  })

  it('returns expected words when center letter is f', () => {
    const pangram = 'abcednt'
    const centerLetter = 'c'
    const result = getWordsFromPangram(pangram, centerLetter, mockData)

    expect(result).not.toContain('date')
    expect(result).not.toContain('banana')
    expect(result).not.toContain('apple')
    expect(result).not.toContain('cherry')
  })
})
