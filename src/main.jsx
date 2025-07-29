import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'    
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Twopage from './pagetwo.jsx'

const rota = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/twopage",
    element: <Twopage />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={rota}> 

  </RouterProvider>
)
