const rules = {
  minimumWordLength: 4,
  scorePerLetter: 1,
  pangramBonus: 7,
}

export const getWordsScore = (words: string[]) => {
  return words.map((word) => {
    const isPangram = new Set(word).size === 7
    const score = calculateWordScore(word, isPangram)

    return {
      word,
      score,
      isPangram,
    }
  })
}

const calculateWordScore = (word: string, isPangram: boolean) => {
  const wordLength = word.length

  if (wordLength < rules.minimumWordLength) {
    return 0
  }

  const score = (wordLength - (rules.minimumWordLength - 1)) * rules.scorePerLetter

  if (isPangram) {
    return score + rules.pangramBonus
  }

  return score
}
