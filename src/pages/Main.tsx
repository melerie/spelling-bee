import { styled } from 'styled-components'

import { useState } from 'react'

import { Button, Hexagons, Shuffle, SpellingInput } from '../components'

export const Main = () => {
  const [inputLetters, setInputLetters] = useState<string>()

  const handleDelete = () => {
    setInputLetters((letters) => letters && letters.slice(0, -1))
  }

  return (
    <Container>
      <SpellingInput letters={inputLetters} centerLetter="3" />
      <Hexagons setInputLetters={setInputLetters} />
      <Inline>
        <Button>Enter</Button>
        <RoundButton>
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
