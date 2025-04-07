import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserData from './Components/UserData.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserData>
       <App />
    </UserData>
  </StrictMode>,
)
