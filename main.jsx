import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
  </Routes>
  </BrowserRouter>,
)
