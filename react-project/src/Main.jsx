import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import ListadoApp from './ListadoApp'
import AgregarTarea from './components/AgregarTarea';
createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <AgregarTarea/>
    <ListadoApp/>
  </StrictMode>,
)
