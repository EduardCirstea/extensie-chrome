import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.createElement('div')
rootElement.id = 'react-chrome-app'
document.body.appendChild(rootElement)
const globalStyles = document.createElement('style')
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999;
  }
`
rootElement.appendChild(globalStyles)
document.body.appendChild(rootElement)
const root = ReactDOM.createRoot(rootElement)
// const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
