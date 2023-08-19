import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react'

type Props = {
  children: ReactNode
}

type DrawerProviderProps = {
  drawerIndex: number
  setDrawerIndex: Dispatch<SetStateAction<number>>
}

export const DrawerContext = createContext<null | DrawerProviderProps>(null)

export const DrawerProvider = ({ children }: Props) => {
  const [drawerIndex, setDrawerIndex] = useState(-1)

  const memoizedContextValue = useMemo(() => ({ drawerIndex, setDrawerIndex }), [drawerIndex])

  return <DrawerContext.Provider value={memoizedContextValue}>{children}</DrawerContext.Provider>
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('This component must be used within a <DrawerProvider /> component.')
  }

  return context
}
