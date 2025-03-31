import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const submitHandler = (e) =>{
         e.preventDefault()
         handleLogin(email , password)
         setEmail("")
         setPassword("")
    }
     

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-5 border-amber-200 rounded-2xl p-20'>
            <form
            onSubmit={(e) => {
                 submitHandler(e)
            }}
             className='flex items-center justify-center flex-col' >
                <input
                 value = {email} 
                onChange={(e)=>{
                   setEmail(e.target.value)
                    
                }}
                required 
                className='rounded-xl mt-3  px-6 py-3 placeholder:text-gray-500 text-black- outline-none bg-gray-300 text-xl' type="Email" placeholder='Enter Your Email' 
                />
                <input 
                
                value = {password} 
               onChange={(e)=>{
                  setPassword(e.target.value)
                   
               }}
                required 
                className='rounded-xl mt-3  px-6 py-3 placeholder:text-gray-500 text-black outline-none bg-gray-300 text-xl' type="Password" placeholder='Enter Your Password' />
                <button className='rounded-xl mt-3 border-none  px-10 py-3 placeholder:text-amber-900 text-black outline-none bg-amber-600 text-xl'>
                Login
            </button>
            </form>
            
        </div>
    </div>
  )
}

export default Login