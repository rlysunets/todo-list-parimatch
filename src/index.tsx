import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import "./scss/_reset.scss"

const root = ReactDOM.createRoot(document.getElementById('root') as Element)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)