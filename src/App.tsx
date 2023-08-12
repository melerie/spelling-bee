import styled, { ThemeProvider } from 'styled-components'

import { Main } from './pages/Main'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import { Footer, Header } from './components'
import { useFetchData } from './hooks'

export const App = () => {
  const { data, error, loading } = useFetchData({ url: '/words.json', skip: true })
  console.log(data)
  console.log(error)
  console.log(loading)

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

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
