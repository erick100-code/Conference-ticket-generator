import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'    
import Tick from './routes/ticket.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Contextprovider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Contextprovider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/ticket' element={<Tick/>}></Route>
        </Routes>
      </HashRouter> 
    </Contextprovider>
  </StrictMode>
)
