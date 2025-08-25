import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const initializeData = async () => {
            try {
                setLocalStorage()
                const {employees} = getLocalStorage()
                setuserData(employees)
            } catch (error) {
                console.error('Error initializing user data:', error)
            } finally {
                setTimeout(() => setIsLoading(false), 800) // Smooth loading transition
            }
        }
        
        initializeData()
    }, [])

    if (isLoading) {
        return (
            <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden'>
                {/* Animated Background Elements */}
                <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                    <div className='absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-full blur-3xl animate-pulse'></div>
                    <div className='absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-100/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000'></div>
                </div>
                
                {/* Loading Content */}
                <div className='relative z-10 text-center'>
                    <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-12 relative overflow-hidden max-w-md mx-4'>
                        {/* Gradient Overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl'></div>
                        
                        {/* Content */}
                        <div className='relative z-10'>
                            {/* Logo/Icon */}
                            <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-8 shadow-lg'>
                                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                </svg>
                            </div>
                            
                            {/* Loading Animation */}
                            <div className='flex justify-center mb-6'>
                                <div className='flex space-x-2'>
                                    <div className='w-3 h-3 bg-indigo-500 rounded-full animate-bounce'></div>
                                    <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100'></div>
                                    <div className='w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200'></div>
                                </div>
                            </div>
                            
                            {/* Loading Text */}
                            <h2 className='text-2xl font-bold text-gray-800 mb-2'>Loading Workspace</h2>
                            <p className='text-gray-600 mb-6'>Setting up your environment...</p>
                            
                            {/* Progress Bar */}
                            <div className='w-full bg-gray-200 rounded-full h-2 overflow-hidden'>
                                <div className='bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full animate-pulse' style={{width: '70%'}}></div>
                            </div>
                            
                            {/* Loading Steps */}
                            <div className='mt-6 space-y-2 text-left'>
                                <div className='flex items-center space-x-2 text-sm text-gray-600'>
                                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                    <span>Initializing system...</span>
                                </div>
                                <div className='flex items-center space-x-2 text-sm text-gray-600'>
                                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                    <span>Loading user data...</span>
                                </div>
                                <div className='flex items-center space-x-2 text-sm text-gray-600'>
                                    <div className='w-2 h-2 bg-indigo-500 rounded-full animate-pulse'></div>
                                    <span>Preparing dashboard...</span>
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

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100 relative'>
            {/* Subtle Background Pattern */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-30'>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-2xl'></div>
                    <div className='absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-2xl'></div>
                    <div className='absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-2xl'></div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className='relative z-10 min-h-screen'>
                <AuthContext.Provider value={[userData, setuserData]}>
                    {children}
                </AuthContext.Provider>
            </div>
        </div>
    )
}

export default AuthProvider