import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from './components/Sidebar.jsx'
import './App.css'
import Cards from './components/Cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar/>
    <Cards/>
    
  </StrictMode>,
)

