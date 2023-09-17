import { ReactNode } from 'react'
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
  const { gameData, setGameData } = useSpellingBee()
  const { error, loading } = useFetchData<WordsList>({
    url: '/words.json',
    skip: !!storedValue && !!gameData,
    onComplete: (data) => {
      const gameData = getHiveGameData(data)
      setGameData(gameData)
    },
  })

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
