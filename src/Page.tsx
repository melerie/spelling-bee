import { Footer } from './components/Footer'
import { Hexagons } from './components/Hexagons'
import { Header } from './components/Header'
import { styled } from 'styled-components'
import { GlobalStyle } from './globalStyles'

export const Page = () => (
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
