import react, { useEffect } from 'react'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Policy from './Pages/Policy'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import Otp from './Pages/Otp'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAllProuct } from './Components/redux/slice/ProductSlice'
import { useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);


  useEffect(() => {
    // Dispatch the fetchAllProduct async thunk when the component mounts
    dispatch(fetchAllProuct());
  }, [dispatch]);

  if (status === "loading") {
    console.log("loading")
  }

  if (status === "error") {
    console.log("erro")
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/otp' element={<Otp />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='/*' element={<Notfound />}></Route>
      </Routes>
    </>
  )
}

export default App
