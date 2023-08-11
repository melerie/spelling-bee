import styled, { ThemeProvider } from 'styled-components'

import { Main } from './pages/Main'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import { Footer, Header } from './components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />

        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
