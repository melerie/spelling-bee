import { StrictMode } from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import { Providers } from './Providers'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)
root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
)
