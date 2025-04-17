import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import { ContadorApp } from './ContadorApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <ContadorApp entero={0}/>
  </StrictMode>,
)
