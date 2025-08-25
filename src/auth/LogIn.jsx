import React, { useState } from 'react'

const LogIn = ({handleLogIn}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogIn(email,password)
        setemail('')
        setpassword('')
    }

  return (
    <div className='p-4 text-gray-900 min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-stone-100 px-4 sm:px-6 lg:px-8'>
        <div className='p-4 text-gray-900 w-full max-w-md'>
            <div className='p-4 text-gray-900 bg-white/80 backdrop-blur-sm border border-slate-200 shadow-2xl rounded-2xl px-8 py-12 sm:px-10'>
                <div className='p-4 text-gray-900 text-center mb-8'>
                    <h2 className='p-4 text-3xl font-bold text-slate-800 mb-2'>Welcome Back</h2>
                    <p className='p-4 text-slate-600'>Please sign in to your account</p>
                </div>
                
                <form onSubmit={(e) => { submitHandler(e)}} className='p-4 text-gray-900 space-y-6'>
                    <div>
                        <label className='p-4 block text-sm font-medium text-slate-700 mb-2'>
                            Email Address
                        </label>
                        <input 
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                            required 
                            className='p-4 w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200' 
                            type="email" 
                            placeholder='Enter your email'
                        />
                    </div>
                    
                    <div>
                        <label className='p-4 block text-sm font-medium text-slate-700 mb-2'>
                            Password
                        </label>
                        <input 
                            value={password} 
                            onChange={(e) => { setpassword(e.target.value) }}
                            required 
                            className='p-4 w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200' 
                            type="password" 
                            placeholder='Enter password'
                        />
                    </div>
                    
                    <button 
                        type='submit'
                        className='p-4 w-full bg-gradient-to-r from-emerald-100 to-cyan-100 hover:from-emerald-200 hover:to-cyan-200 text-slate-800 font-semibold py-3 px-6 rounded-xl border border-emerald-200 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-200'
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LogIn