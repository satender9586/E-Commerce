import react from 'react'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Policy from './Pages/Policy'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='/*' element={<Notfound />}></Route>

      </Routes>
    </>
  )
}

export default App
