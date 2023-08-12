import styled, { ThemeProvider } from 'styled-components'

import { Main } from './pages/Main'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import { Footer, Header } from './components'
import { useFetchData, useLocalStorage } from './hooks'
import { SpellingBeeValues } from './types'
import { useEffect } from 'react'

type ContentProps = {
  error: Error | undefined
  loading: boolean
  hiveLetters: string | undefined
}

export const App = () => {
  const { storedValue, setLocalStorageValue } = useLocalStorage<SpellingBeeValues>({ key: 'spellingBee' })
  const { data, error, loading } = useFetchData({ url: '/words.json', skip: !!storedValue })

  const { hiveLetters } = storedValue || {}

  useEffect(() => {
    if (data) {
      // TODO: get the hiveLetters from the data
      setLocalStorageValue({ hiveLetters: 'abcdefg' })
    }
  }, [data, setLocalStorageValue])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Content error={error} loading={loading} hiveLetters={hiveLetters} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const Content = ({ error, loading, hiveLetters }: ContentProps) => {
  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return <Main hiveLetters={hiveLetters} />
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
