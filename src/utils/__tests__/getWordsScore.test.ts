import { getWordsScore } from '../getWordsScore'

describe('getWordsScore', () => {
  it('calculates scores for regular words', () => {
    const words = ['apple', 'banana']
    const result = getWordsScore(words)

    expect(result).toEqual([
      { word: 'apple', score: 2, isPangram: false },
      { word: 'banana', score: 3, isPangram: false },
    ])
  })

  it('calculates scores for pangrams', () => {
    const words = ['pangram', 'unique', 'shunted']
    const result = getWordsScore(words)

    expect(result).toEqual([
      { word: 'pangram', score: 4, isPangram: false },
      { word: 'unique', score: 3, isPangram: false },
      { word: 'shunted', score: 11, isPangram: true },
    ])
  })

  it('handles minimum word length', () => {
    const words = ['a', 'apple', 'banana']
    const result = getWordsScore(words)

    expect(result).toEqual([
      { word: 'a', score: 0, isPangram: false },
      { word: 'apple', score: 2, isPangram: false },
      { word: 'banana', score: 3, isPangram: false },
    ])
  })

  it('handles empty word array', () => {
    const words: string[] = []
    const result = getWordsScore(words)

    expect(result).toEqual([])
  })
})
