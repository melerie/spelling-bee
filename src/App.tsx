import { ReactNode, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Game } from './modules/Game'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import { Drawer, Footer, Header } from './components'
import { useFetchData, useLocalStorage } from './hooks'
import { SpellingBeeValues, WordsList } from './types'
import { getHiveGameData } from './utils'
import { DrawerProvider } from './context'

type ContentProps = {
  error: Error | undefined
  loading: boolean
  children: ReactNode
}

export const App = () => {
  const { storedValue, setLocalStorageValue } = useLocalStorage<SpellingBeeValues>({ key: 'spellingBee' })
  const { data, error, loading } = useFetchData<WordsList>({ url: '/words.json', skip: !!storedValue })

  useEffect(() => {
    if (!data) {
      return
    }

    const gameData = getHiveGameData(data)
    setLocalStorageValue(gameData)

    // We only want to run this once, when the data is loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Content error={error} loading={loading}>
          <Game storedValue={storedValue} setLocalStorageValue={setLocalStorageValue} />
        </Content>
        <Footer />
      </Container>
      <DrawerProvider>
        <>
          <Drawer index={0} buttonText="Word list">
            One
          </Drawer>
          <Drawer index={1} buttonText="Reset">
            Two
          </Drawer>
        </>
      </DrawerProvider>
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
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
