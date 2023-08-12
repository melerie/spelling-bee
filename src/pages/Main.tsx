import { useState } from 'react'
import { styled } from 'styled-components'

import { Button, Hexagons, Shuffle, SpellingInput } from '../components'
import { SpellingBeeValues } from '../types'
import { StorageValue, StorageValueFunction } from '../hooks'

type Props = {
  hiveLetters: string | undefined
  centerLetter: string | undefined
  setLocalStorageValue: (value: StorageValue<SpellingBeeValues> | StorageValueFunction<SpellingBeeValues>) => void
}

export const Main = ({ hiveLetters, centerLetter, setLocalStorageValue }: Props) => {
  const [inputLetters, setInputLetters] = useState<string>()

  if (!hiveLetters || !centerLetter) {
    return <p>Error loading app</p>
  }

  const handleDelete = () => {
    setInputLetters((letters) => letters && letters.slice(0, -1))
  }

  const handleShuffle = () => {
    setLocalStorageValue((value) => {
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

  return (
    <Container>
      <SpellingInput letters={inputLetters} centerLetter={centerLetter} />
      <Hexagons setInputLetters={setInputLetters} hiveLetters={hiveLetters} centerLetter={centerLetter} />
      <Inline>
        <Button>Enter</Button>
        <RoundButton onClick={handleShuffle}>
          <Shuffle />
        </RoundButton>
        <Button onClick={handleDelete}>Delete</Button>
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
