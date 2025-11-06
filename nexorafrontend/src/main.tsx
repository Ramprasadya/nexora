// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './components/context/ShopContext.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ShopContextProvider>
    <StrictMode>
    <App />
    </StrictMode>
  </ShopContextProvider>
  </BrowserRouter>
)
