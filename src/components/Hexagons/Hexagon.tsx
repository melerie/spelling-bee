import { ReactNode, useState } from 'react'

import { HexagonButton, HexagonButtonWrapper, HexagonContainer, HexagonContent } from './styles'

type Props = {
  children: ReactNode
  onClick: VoidFunction
}

export const Hexagon = ({ children, onClick }: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  return (
    <HexagonContainer>
      <HexagonButtonWrapper isMouseDown={isMouseDown}>
        <HexagonButton
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
          onMouseOut={() => setIsMouseDown(false)}
          onClick={onClick}
        ></HexagonButton>
      </HexagonButtonWrapper>
      <HexagonContent>{children}</HexagonContent>
    </HexagonContainer>
  )
}
