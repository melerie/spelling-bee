import { ReactNode, useState } from 'react'

import { Container, HexagonButton, HexagonButtonWrapper, HexagonContainer, HexagonContent } from './styles'

export const Hexagons = () => {
  return (
    <Container>
      <Hexagon>1</Hexagon>
      <Hexagon>1</Hexagon>
      <Hexagon>1</Hexagon>
      <Hexagon>1</Hexagon>
      <Hexagon>1</Hexagon>
      <Hexagon>1</Hexagon>
      <Hexagon>1</Hexagon>
    </Container>
  )
}

type HexagonProps = {
  children: ReactNode
}

const Hexagon = ({ children }: HexagonProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <HexagonContainer>
      <HexagonButtonWrapper isMouseDown={isMouseDown}>
        <HexagonButton
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
          onMouseOut={() => setIsMouseDown(false)}
        ></HexagonButton>
      </HexagonButtonWrapper>
      <HexagonContent>{children}</HexagonContent>
    </HexagonContainer>
  )
}
