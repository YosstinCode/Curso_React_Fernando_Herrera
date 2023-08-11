import React from 'react'
import ReactDom from 'react-dom/client'
import CounterApp from './CounterApp'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp initialCount={10} />
  </React.StrictMode>
)
