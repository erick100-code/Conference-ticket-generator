import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'    
import Tick from './routes/ticket.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contextprovider } from './context/context.jsx'

const rot = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/ticket",
    element: <Tick />
  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Contextprovider>
      <RouterProvider router={rot}></RouterProvider>
    </Contextprovider>
  </StrictMode>
)
