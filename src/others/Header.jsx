import React, { useState } from 'react'

const Header = ({ changeUser, firstName }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')
    }

    const displayName = firstName || 'Admin'
    const isAdmin = !firstName || firstName === undefined

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good Morning'
        if (hour < 17) return 'Good Afternoon'
        return 'Good Evening'
    }

    return (
        <div className='relative'>
            {/* Main Header */}
            <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 sm:p-8 relative overflow-hidden'>
                {/* Gradient Background */}
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-3xl'></div>
                
                {/* Content */}
                <div className='relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between'>
                    {/* Left Side - Welcome */}
                    <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                        {/* Avatar */}
                        <div className='relative'>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
                                <span className='text-2xl sm:text-3xl font-bold text-white'>
                                    {displayName.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            {/* Status Indicator */}
                            <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-3 border-white rounded-full flex items-center justify-center'>
                                <div className='w-2 h-2 bg-green-600 rounded-full animate-pulse'></div>
                            </div>
                        </div>
                        
                        {/* Welcome Text */}
                        <div>
                            <div className='flex items-center space-x-2 mb-1'>
                                <h1 className='text-lg sm:text-xl font-medium text-gray-600'>
                                    {getGreeting()}! 👋
                                </h1>
                                {isAdmin && (
                                    <div className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200 shadow-sm'>
                                        <svg className='w-3 h-3 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.043-.2-2.04-.566-2.929a1 1 0 010-1.414l-.777-.777z'/>
                                        </svg>
                                        Admin
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center space-x-2'>
                                <span className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                                    {displayName}
                                </span>
                            </div>
                            <p className='text-sm text-gray-500 mt-1'>
                                {new Date().toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Side - Profile & Actions */}
                    <div className='flex items-center space-x-4 w-full sm:w-auto'>
                        {/* Quick Stats */}
                        <div className='hidden lg:flex items-center space-x-4 mr-6'>
                            <div className='flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-2xl border border-gray-200'>
                                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                <span className='text-sm font-medium text-gray-700'>Online</span>
                            </div>
                        </div>
                        
                        {/* Profile Dropdown */}
                        <div className='relative'>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className='flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md'
                            >
                                <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'/>
                                </svg>
                                <span className='hidden sm:block text-sm font-medium text-gray-700'>Settings</span>
                                <svg className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7'/>
                                </svg>
                            </button>
                            
                            {/* Dropdown Menu */}
                            {showDropdown && (
                                <div className='absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl py-2 z-50'>
                                    <div className='px-4 py-3 border-b border-gray-100'>
                                        <div className='flex items-center space-x-3'>
                                            <div className='w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center'>
                                                <span className='text-sm font-bold text-white'>
                                                    {displayName.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                            <div>
                                                <p className='text-sm font-semibold text-gray-800'>{displayName}</p>
                                                <p className='text-xs text-gray-500'>{isAdmin ? 'Administrator' : 'Employee'}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={logOutUser}
                                        className='flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-red-50 transition-colors duration-200 group'
                                    >
                                        <svg className='w-5 h-5 text-red-500 group-hover:text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'/>
                                        </svg>
                                        <span className='text-sm font-medium text-red-600 group-hover:text-red-700'>Sign Out</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Backdrop for dropdown */}
            {showDropdown && (
                <div 
                    className='fixed inset-0 z-40' 
                    onClick={() => setShowDropdown(false)}
                ></div>
            )}
        </div>
    )
}

export default Header