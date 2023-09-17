import { ReactNode, useEffect } from 'react'
import styled from 'styled-components'

import { Game, DrawerMenus } from './modules'
import { GlobalStyle } from './globalStyles'
import { Footer, Header } from './components'
import { useFetchData, useLocalStorage } from './hooks'
import { SpellingBeeValues, WordsList } from './types'
import { getHiveGameData } from './utils'
import { useSpellingBee } from './context'

type ContentProps = {
  error: Error | undefined
  loading: boolean
  children: ReactNode
}

export const App = () => {
  const { storedValue } = useLocalStorage<SpellingBeeValues>({ key: 'spellingBee' })
  const { setGameData } = useSpellingBee()
  const { error, loading } = useFetchData<WordsList>({
    url: '/words.json',
    skip: !!storedValue,
    onComplete: (data) => {
      const gameData = getHiveGameData(data)
      setGameData(gameData)
    },
  })

  useEffect(() => {
    if (storedValue) {
      setGameData(storedValue)
    }
    // We don't want to run this effect when the storedValue changes
    // It should only run once on mount to set the gameData from localStorage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <GlobalStyle />
      <DrawerMenus />
      <Container>
        <Header />
        <Content error={error} loading={loading}>
          <Game />
        </Content>
        <Footer />
      </Container>
    </>
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
