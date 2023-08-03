import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ChakraProvider>
      <ToastContainer />
      <App />
    </ChakraProvider>
  </BrowserRouter>

)
