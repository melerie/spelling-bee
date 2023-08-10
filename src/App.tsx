import { ThemeProvider } from 'styled-components'
import { Main } from './pages/Main'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App
