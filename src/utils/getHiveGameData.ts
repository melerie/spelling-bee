import { WordsList } from '../types'
import { getRandomStringFromArray } from './getRandomStringFromArray'
import { getWordsFromPangram } from './getWordsFromPangram'
import { getWordsScore } from './getWordsScore'

export const getHiveGameData = (data: WordsList) => {
  const sevenLetterPangrams = getSevenLetterPangrams(data)

  const randomSevenLetterPangramWord = getRandomStringFromArray(sevenLetterPangrams)
  const randomSevenLetterPangramArr = [...new Set(randomSevenLetterPangramWord)]
  const randomSevenLetterPangram = randomSevenLetterPangramArr.join('')
  const centerLetter = getRandomStringFromArray(randomSevenLetterPangramArr)

  const wordsFromPangram = getWordsFromPangram(randomSevenLetterPangram, centerLetter, data)
  const numberOfWordsFromPangram = wordsFromPangram.length
  const wordsWithScore = getWordsScore(wordsFromPangram)
  const totalScore = wordsWithScore.reduce((acc, { score }) => acc + score, 0)

  return {
    hiveLetters: randomSevenLetterPangram.replace(centerLetter, ''),
    numberOfAnswers: numberOfWordsFromPangram,
    answersWithScore: wordsWithScore,
    centerLetter,
    totalScore,
  }
}

const getSevenLetterPangrams = (data: WordsList) => {
  return Object.keys(data).filter((word) => {
    if (word.length >= 7 && new Set(word).size === 7) {
      return true
    }
    return false
  })
}
