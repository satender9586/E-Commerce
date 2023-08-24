import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from "./Components/redux/store.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ChakraProvider>
      <ToastContainer />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>

)
