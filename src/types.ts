type Answers = {
  word: string
  score: number
  isPangram: boolean
}

export type SpellingBeeValues = {
  hiveLetters: string
  centerLetter: string
  answersWithScore: Answers[]
  numberOfAnswers: number
  totalScore: number
}

export type WordsList = Record<string, number>
