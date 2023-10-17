import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { CodeKidPlayApp } from './CodeKidPlayApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CodeKidPlayApp />
  </BrowserRouter>
)
