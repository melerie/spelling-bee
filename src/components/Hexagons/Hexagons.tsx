import { Dispatch, Fragment, SetStateAction } from 'react'

import { Hexagon } from './Hexagon'
import { Container, HexagonsContainer } from './styles'

type Props = {
  setInputLetters: Dispatch<SetStateAction<string | undefined>>
  hiveLetters: string
  centerLetter: string
}

export const Hexagons = ({ setInputLetters, hiveLetters, centerLetter }: Props) => {
  return (
    <Container>
      <HexagonsContainer>
        {Array.from(hiveLetters).map((hiveLetter, i) => {
          return (
            <Fragment key={`hexagon-${hiveLetter}`}>
              {i === 3 && (
                <Hexagon onClick={() => setInputLetters((letters = '') => letters + centerLetter)}>
                  {centerLetter}
                </Hexagon>
              )}
              <Hexagon onClick={() => setInputLetters((letters = '') => letters + hiveLetter)}>{hiveLetter}</Hexagon>
            </Fragment>
          )
        })}
      </HexagonsContainer>
    </Container>
  )
}
