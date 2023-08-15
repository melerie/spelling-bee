import { WordsList } from '../types'

export const getWordsFromPangram = (pangram: string, centerLetter: string, data: WordsList) => {
  const pangramLetters = pangram.split('')

  const wordsFromPangram = Object.keys(data).filter((word) => {
    const wordLetters = word.split('')
    const isWordIncludesCenterLetter = wordLetters.includes(centerLetter)

    if (!isWordIncludesCenterLetter) return false

    const isWordFromPangram = wordLetters.every((letter) => pangramLetters.includes(letter))
    return isWordFromPangram
  })

  const uniqueWordsFromPangram = Array.from(new Set(wordsFromPangram))

  return uniqueWordsFromPangram
}
