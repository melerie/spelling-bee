import { useState } from 'react'
import { styled } from 'styled-components'

import { Hexagons, Shuffle, SpellingInput } from './components'
import { Button } from '../../components'
import { verifySubmittedValue } from './verifySubmittedValue'
import { useToast } from './useToast'
import { useSpellingBee } from '../../context'

export const Game = () => {
  const [inputLetters, setInputLetters] = useState<string>()
  const { setToast, Toast } = useToast()
  const { setGameData, gameData } = useSpellingBee()

  if (!gameData) {
    return <p>Error loading app</p>
  }

  const { hiveLetters, centerLetter, answersWithScore, foundAnswers } = gameData

  const handleDelete = () => {
    setInputLetters((letters) => letters?.slice(0, -1))
  }

  const handleShuffle = () => {
    setGameData((value) => {
      if (!value) return
      return {
        ...value,
        hiveLetters: value.hiveLetters
          .split('')
          .sort(() => Math.random() - 0.5)
          .join(''),
      }
    })
  }

  const handleSubmit = () => {
    const valueValidation = verifySubmittedValue(inputLetters, centerLetter)

    if (valueValidation.error) {
      setToast({ message: valueValidation.error })
      setInputLetters('')
      return
    }

    const matchedAnswer = answersWithScore.find((answer) => answer.word === inputLetters)

    if (!matchedAnswer) {
      setToast({ message: 'Not a valid word!' })
      setInputLetters('')
      return
    }

    const isAlreadyFound = foundAnswers.some((answer) => answer.word === inputLetters)

    if (isAlreadyFound) {
      setToast({ message: 'Word already found!' })
      setInputLetters('')
      return
    }

    setGameData((value) => {
      if (!value) return
      return {
        ...value,
        foundAnswers: [...value.foundAnswers, matchedAnswer],
      }
    })
    setToast({ message: 'Awesome!', type: 'success' })
    setInputLetters('')
  }

  return (
    <Container>
      {Toast}
      <SpellingInput letters={inputLetters} centerLetter={centerLetter} handleDelete={handleDelete} />
      <Hexagons setInputLetters={setInputLetters} hiveLetters={hiveLetters} centerLetter={centerLetter} />
      <Inline>
        <Button onClick={() => setInputLetters('')}>Clear</Button>
        <RoundButton onClick={handleShuffle}>
          <Shuffle />
        </RoundButton>
        <Button onClick={handleSubmit}>Enter</Button>
      </Inline>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;

  width: 100%;
  padding: 20px;
  max-width: 1400px;
`

const Inline = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
`

const RoundButton = styled(Button)`
  width: 3rem;
  padding: 0;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`
