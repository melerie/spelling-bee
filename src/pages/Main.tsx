import { styled } from 'styled-components'

import { Button, Hexagons, Shuffle } from '../components'

export const Main = () => (
  <>
    <Hexagons />
    <Inline>
      <Button>Enter</Button>
      <RoundButton>
        <Shuffle />
      </RoundButton>
      <Button>Delete</Button>
    </Inline>
  </>
)

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
