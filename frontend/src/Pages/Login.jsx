import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, BackendUrl } = useContext(ShopContext)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(BackendUrl + "/api/user/register", { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
        }
        else {
          toast.error(response.data.messsage)
        }
      }
      else {
        const response = await axios.post(BackendUrl + "/api/user/login", { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
          toast.success("Login Successfull..!")
        }
        else {
          toast.error(response.data.messsage)
          toast.error("Incorrect Email or Password..!")
        }
      }
    } catch (error) {
      toast.error(error.messsage)
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === "Login" ? "" : <input onChange={(event) => setName(event.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />}
      <input onChange={(event) => setEmail(event.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='E-mail' required />
      <input onChange={(event) => setPassword(event.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState === "Sign Up" ? "" : <p className='cursor-pointer'>Forgot Your Password?</p>}
        {currentState === "Login" ? "" : <p className='cursor-pointer'></p>}
        {
          currentState === "Login" ? <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>New User? <span className='cursor-pointer text-black font-bold'>Create an Account</span></p>
            : <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Already Have an Account? <span className='cursor-pointer text-black font-bold'>Login Here</span> </p>
        }
      </div>
      <button onClick={onSubmitHandler} type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login