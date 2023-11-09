import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
// import { configureStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// import reducers from './reducers'

// const store = configureStore(reducers, compose(applyMiddleware(thunk)))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
