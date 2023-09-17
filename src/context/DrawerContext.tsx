import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { Drawer, DrawerSettings, Drawers } from '../components'

type Props = {
  children: ReactNode
}

type DrawerProviderProps = {
  drawerIndex: number
  setDrawerIndex: Dispatch<SetStateAction<number>>
  addDrawer: (drawerSettings: DrawerSettings) => void
  drawers: ReactElement[]
}

export const DrawerContext = createContext<null | DrawerProviderProps>(null)

export const DrawerProvider = ({ children }: Props) => {
  const [drawerIndex, setDrawerIndex] = useState(-1)
  const [drawerArrs, setDrawerArrs] = useState<DrawerProviderProps['drawers']>([])

  const addDrawer = useCallback(
    (drawerSettings: DrawerSettings) => {
      setDrawerArrs((drawers) => [...drawers, <Drawer {...drawerSettings} />])
    },
    [setDrawerArrs]
  )

  const memoizedContextValue = useMemo(
    () => ({ drawerIndex, setDrawerIndex, addDrawer, drawers: drawerArrs }),
    [addDrawer, drawerIndex, drawerArrs]
  )

  return (
    <DrawerContext.Provider value={memoizedContextValue}>
      {children}
      <Drawers />
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('This component must be used within a <DrawerProvider /> component.')
  }

  return context
}
