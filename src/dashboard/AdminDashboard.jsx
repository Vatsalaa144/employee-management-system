import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-100/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000'></div>
            </div>
            
            {/* Main Content */}
            <div className='relative z-10 p-4 sm:p-6 lg:p-10'>
                <div className='max-w-7xl mx-auto space-y-8'>
                    {/* Enhanced Header Section */}
                    <div className='space-y-6'>
                        {/* Clean Header with Simple Logout */}
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
                                            <span className='text-2xl sm:text-3xl font-bold text-white'>A</span>
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
                                                Good Day! 👋
                                            </h1>
                                            <div className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200 shadow-sm'>
                                                <svg className='w-3 h-3 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                                                    <path fillRule='evenodd' d='M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.043-.2-2.04-.566-2.929a1 1 0 010-1.414l-.777-.777z'/>
                                                </svg>
                                                Admin
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <span className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                                                Admin Panel
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
                                
                                {/* Right Side - Simple Logout Button */}
                                <div className='flex items-center space-x-4 w-full sm:w-auto justify-end'>
                                    {/* System Status */}
                                    <div className='hidden sm:flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-2xl border border-gray-200'>
                                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                        <span className='text-sm font-medium text-gray-700'>Active</span>
                                    </div>
                                    
                                    {/* Beautiful Logout Button */}
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('loggedInUser', '')
                                            props.changeUser('')
                                        }}
                                        className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-rose-600 hover:from-red-600 hover:via-pink-600 hover:to-rose-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500/25'
                                    >
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'/>
                                        </svg>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Admin Dashboard Navigation */}
                        <div className='flex flex-wrap items-center justify-between gap-4'>
                            <div className='flex items-center space-x-6'>
                                <div className='flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-2xl'>
                                    <svg className='w-4 h-4 text-indigo-600' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'/>
                                    </svg>
                                    <span className='text-sm font-semibold text-indigo-700'>Dashboard Overview</span>
                                </div>
                                
                                <div className='text-sm text-gray-600'>
                                    Welcome to the Admin Panel - Manage tasks and monitor team progress
                                </div>
                            </div>
                            
                            {/* Quick Access Pills */}
                            <div className='flex items-center space-x-2'>
                                <span className='text-xs font-medium text-gray-500'>Quick Access:</span>
                                <div className='flex items-center space-x-1'>
                                    <button className='px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-200 transition-colors'>
                                        Create Task
                                    </button>
                                    <button className='px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full border border-green-200 hover:bg-green-200 transition-colors'>
                                        View All Tasks
                                    </button>
                                    <button className='px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full border border-purple-200 hover:bg-purple-200 transition-colors'>
                                        Team Stats
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Dashboard Content Grid */}
                    <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
                        {/* Create Task Section - Takes 2 columns on xl screens */}
                        <div className='xl:col-span-2'>
                            <Createtask />
                        </div>
                        
                        {/* Quick Actions Panel - 1 column on xl screens */}
                        <div className='space-y-6'>
                            {/* Quick Stats */}
                            <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 relative overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-3xl'></div>
                                <div className='relative z-10'>
                                    <h3 className='text-lg font-bold text-gray-800 mb-4 flex items-center'>
                                        <svg className='w-5 h-5 mr-2 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                                            <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                                        </svg>
                                        System Status
                                    </h3>
                                    <div className='space-y-4'>
                                        <div className='flex items-center justify-between p-3 bg-white/60 rounded-2xl border border-gray-200'>
                                            <span className='text-sm font-medium text-gray-700'>Admin Access</span>
                                            <div className='flex items-center space-x-2'>
                                                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                                <span className='text-sm font-semibold text-green-600'>Active</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between p-3 bg-white/60 rounded-2xl border border-gray-200'>
                                            <span className='text-sm font-medium text-gray-700'>Last Login</span>
                                            <span className='text-sm font-semibold text-gray-600'>Just now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Quick Actions */}
                            <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 relative overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl'></div>
                                <div className='relative z-10'>
                                    <h3 className='text-lg font-bold text-gray-800 mb-4 flex items-center'>
                                        <svg className='w-5 h-5 mr-2 text-purple-600' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd'/>
                                        </svg>
                                        Admin Actions
                                    </h3>
                                    <div className='space-y-3'>
                                        <button className='w-full flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md group'>
                                            <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                                                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4'/>
                                                </svg>
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-sm font-semibold text-gray-800'>Add Employee</p>
                                                <p className='text-xs text-gray-500'>Create new user account</p>
                                            </div>
                                        </button>
                                        
                                        <button className='w-full flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md group'>
                                            <div className='w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center'>
                                                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/>
                                                </svg>
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-sm font-semibold text-gray-800'>View Reports</p>
                                                <p className='text-xs text-gray-500'>Analytics & insights</p>
                                            </div>
                                        </button>
                                        
                                        <button className='w-full flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md group'>
                                            <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center'>
                                                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'/>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/>
                                                </svg>
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-sm font-semibold text-gray-800'>Settings</p>
                                                <p className='text-xs text-gray-500'>System preferences</p>
                                            </div>
                                        </button>
                                        
                                        {/* Switch to Employee View */}
                                        <div className='pt-3 border-t border-gray-200'>
                                            <button 
                                                onClick={() => {
                                                    // This could be used to switch to employee view for testing
                                                    console.log('Switch to employee view for testing');
                                                }}
                                                className='w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 rounded-2xl border border-indigo-200 transition-all duration-200 hover:shadow-md group'
                                            >
                                                <div className='w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center'>
                                                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/>
                                                    </svg>
                                                </div>
                                                <div className='text-left'>
                                                    <p className='text-sm font-semibold text-indigo-800'>Test Employee View</p>
                                                    <p className='text-xs text-indigo-600'>Preview employee interface</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Team Overview Section */}
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard