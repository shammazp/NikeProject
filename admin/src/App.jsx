import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Add from "./Pages/Add.jsx"
import List from "./Pages/List.jsx"
import Orders from "./Pages/Orders.jsx"
import Login from './Components/Login.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BackendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₹'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem("token") : "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='br-gray-50 min-h-screen'>
      <ToastContainer />
      {
      token === "" ? <Login setToken={setToken} />
        : <>
          <NavBar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <SideBar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
        }

    </div>
  )
}

export default App