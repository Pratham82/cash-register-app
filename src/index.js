import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CustomFooter from './components/CustomFooter'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CustomFooter size="2x" color="white" />
  </React.StrictMode>,
  document.getElementById('root')
)
