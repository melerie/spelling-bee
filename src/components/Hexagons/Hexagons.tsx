import { Dispatch, SetStateAction } from 'react'
import { Hexagon } from './Hexagon'
import { Container, HexagonsContainer } from './styles'

type Props = {
  setInputLetters: Dispatch<SetStateAction<string | undefined>>
  hiveLetters: string
}

export const Hexagons = ({ setInputLetters, hiveLetters }: Props) => {
  return (
    <Container>
      <HexagonsContainer>
        {Array.from(hiveLetters).map((hiveLetter) => {
          return (
            <Hexagon
              key={`hexagon-${hiveLetter}`}
              onClick={() => setInputLetters((letters = '') => letters + hiveLetter)}
            >
              {hiveLetter}
            </Hexagon>
          )
        })}
      </HexagonsContainer>
    </Container>
  )
}
