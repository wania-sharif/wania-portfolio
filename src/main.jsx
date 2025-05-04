import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './myersReset.css'
import './index.css'
import App from './App.jsx'
import Contact from './components/Contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contact />
  </StrictMode>,
)
