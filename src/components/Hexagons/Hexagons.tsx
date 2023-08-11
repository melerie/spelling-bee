import { Dispatch, SetStateAction } from 'react'
import { Hexagon } from './Hexagon'
import { Container, HexagonsContainer } from './styles'

type Props = {
  setInputLetters: Dispatch<SetStateAction<string | undefined>>
}

export const Hexagons = ({ setInputLetters }: Props) => {
  return (
    <Container>
      <HexagonsContainer>
        {[...Array(7)].map((_, i) => {
          return <Hexagon onClick={() => setInputLetters((letters = '') => letters + i)}>{i}</Hexagon>
        })}
      </HexagonsContainer>
    </Container>
  )
}
