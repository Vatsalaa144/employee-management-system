import React, { useState } from 'react'

const LogIn = ({handleLogIn}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate loading for better UX
        setTimeout(() => {
            handleLogIn(email, password)
            setemail('')
            setpassword('')
            setIsLoading(false)
        }, 800)
    }

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000'></div>
            </div>
            
            <div className='relative w-full max-w-md'>
                {/* Main Card */}
                <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-10 relative overflow-hidden'>
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl'></div>
                    
                    {/* Content */}
                    <div className='relative z-10'>
                        {/* Header */}
                        <div className='text-center mb-8'>
                            <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg'>
                                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                </svg>
                            </div>
                            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Welcome Back</h2>
                            <p className='text-gray-600'>Sign in to access your workspace</p>
                        </div>
                        
                        <form onSubmit={submitHandler} className='space-y-6'>
                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Email Address
                                    </label>
                                    <input 
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        required 
                                        className='w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300' 
                                        type="email" 
                                        placeholder='Enter your email address'
                                    />
                                </div>
                                
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Password
                                    </label>
                                    <input 
                                        value={password} 
                                        onChange={(e) => setpassword(e.target.value)}
                                        required 
                                        className='w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300' 
                                        type="password" 
                                        placeholder='Enter your password'
                                    />
                                </div>
                            </div>
                            
                            <button 
                                type='submit'
                                disabled={isLoading}
                                className='w-full relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:transform-none disabled:hover:shadow-none focus:outline-none focus:ring-4 focus:ring-indigo-500/20'
                            >
                                {isLoading ? (
                                    <div className='flex items-center justify-center'>
                                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2'></div>
                                        Signing In...
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>
                        
                        {/* Demo Credentials */}
                        <div className='mt-8 p-4 bg-gray-50/80 rounded-2xl border border-gray-200'>
                            <h4 className='text-sm font-semibold text-gray-700 mb-2'>Demo Credentials:</h4>
                            <div className='text-xs text-gray-600 space-y-1'>
                                <p><strong>Admin:</strong> admin@gmail.com / 12345</p>
                                <p><strong>Employee:</strong> employee1@gmail.com / 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className='text-center mt-6'>
                    <p className='text-sm text-gray-500'>
                        Employee Management System
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn