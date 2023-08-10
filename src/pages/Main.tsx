import { styled } from 'styled-components'

import { GlobalStyle } from '../globalStyles'
import { Button, Footer, Header, Hexagons, Shuffle } from '../components'

export const Main = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Hexagons />
    <Inline>
      <Button>Enter</Button>
      <RoundButton>
        <Shuffle />
      </RoundButton>
      <Button>Delete</Button>
    </Inline>
    <Footer />
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
