import React from 'react'
import ReactDOM from 'react-dom/client'

import 'normalize.css'
import AppRoutes from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
