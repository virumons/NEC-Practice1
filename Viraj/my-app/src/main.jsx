import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dash from './Dash.jsx'
import Per from './Preformance.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Per /> */}
    <App />
    {/* <Dash /> */}
  </StrictMode>,
)
