import { styled } from 'styled-components'

import { GlobalStyle } from '../globalStyles'
import { Footer, Header, Hexagons } from '../components'

export const Main = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Hexagons />
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
