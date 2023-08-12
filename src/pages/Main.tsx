import { useState } from 'react'
import { styled } from 'styled-components'

import { Button, Hexagons, Shuffle, SpellingInput } from '../components'

type Props = {
  hiveLetters: string | undefined
}

export const Main = ({ hiveLetters }: Props) => {
  const [inputLetters, setInputLetters] = useState<string>()

  if (!hiveLetters) {
    return <p>Error loading app</p>
  }

  const centerLetter = hiveLetters[3]

  const handleDelete = () => {
    setInputLetters((letters) => letters && letters.slice(0, -1))
  }

  return (
    <Container>
      <SpellingInput letters={inputLetters} centerLetter={centerLetter} />
      <Hexagons setInputLetters={setInputLetters} hiveLetters={hiveLetters} />
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
