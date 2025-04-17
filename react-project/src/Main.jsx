import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './Styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente titulo="Esta sección de de propos" subtitulo="Curso de React" entero={1}/>
  </StrictMode>,
)
