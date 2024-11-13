import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontex from './contex/Usercontex.jsx'

createRoot(document.getElementById('root')).render(
   <Usercontex>
    <App/>
   </Usercontex>
)
