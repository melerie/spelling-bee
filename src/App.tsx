import { ReactNode, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Main } from './pages/Main'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import { Footer, Header } from './components'
import { useFetchData, useLocalStorage } from './hooks'
import { SpellingBeeValues } from './types'

type ContentProps = {
  error: Error | undefined
  loading: boolean
  children: ReactNode
}

export const App = () => {
  const { storedValue, setLocalStorageValue } = useLocalStorage<SpellingBeeValues>({ key: 'spellingBee' })
  const { data, error, loading } = useFetchData({ url: '/words.json', skip: !!storedValue })

  const { hiveLetters, centerLetter } = storedValue || {}

  useEffect(() => {
    if (data) {
      // TODO: get the hiveLetters from the data
      setLocalStorageValue({ hiveLetters: 'abcefg', centerLetter: 'd' })
    }
  }, [data, setLocalStorageValue])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Content error={error} loading={loading}>
          <Main hiveLetters={hiveLetters} centerLetter={centerLetter} setLocalStorageValue={setLocalStorageValue} />
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const Content = ({ error, loading, children }: ContentProps) => {
  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return children
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
