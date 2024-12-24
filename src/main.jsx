import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/poppins'; 
import '@fontsource/poppins/400.css'; 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

