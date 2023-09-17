import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { DrawerProvider, SpellingBeeProvider } from './context'
import { theme } from './theme'

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <SpellingBeeProvider>
      <ThemeProvider theme={theme}>
        <DrawerProvider>{children}</DrawerProvider>
      </ThemeProvider>
    </SpellingBeeProvider>
  )
}
