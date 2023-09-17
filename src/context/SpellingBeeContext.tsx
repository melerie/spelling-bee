import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react'
import { SpellingBeeValues } from '../types'
import { useLocalStorage } from '../hooks'

type Props = {
  children: ReactNode
}

export type SpellingBeeValueFunction = (value: SpellingBeeValues | undefined) => SpellingBeeValues | undefined
type SpellingBeeContextProps = {
  gameData: SpellingBeeValues | undefined
  setGameData: (value: SpellingBeeValues | SpellingBeeValueFunction) => void
}

export const SpellingBeeContext = createContext<null | SpellingBeeContextProps>(null)

export const SpellingBeeProvider = ({ children }: Props) => {
  const [data, setData] = useState<SpellingBeeValues>()
  const { setLocalStorageValue } = useLocalStorage<SpellingBeeValues>({ key: 'spellingBee' })

  const setGameData = useCallback(
    (value: SpellingBeeValues | SpellingBeeValueFunction) => {
      const dataToBeSet = typeof value === 'function' ? value(data) : value
      setData(dataToBeSet)
      setLocalStorageValue(dataToBeSet)
    },
    [data, setLocalStorageValue]
  )

  const memoizedContextValue = useMemo(() => ({ gameData: data, setGameData }), [data, setGameData])

  return <SpellingBeeContext.Provider value={memoizedContextValue}>{children}</SpellingBeeContext.Provider>
}

export const useSpellingBee = () => {
  const context = useContext(SpellingBeeContext)

  if (!context) {
    throw new Error('This component must be used within a <SpellingBeeContext /> component.')
  }

  return context
}
