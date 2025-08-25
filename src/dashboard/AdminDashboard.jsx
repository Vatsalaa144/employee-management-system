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
                    {/* Header */}
                    <Header changeUser={props.changeUser} />
                    
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
                                        Quick Overview
                                    </h3>
                                    <div className='space-y-4'>
                                        <div className='flex items-center justify-between p-3 bg-white/60 rounded-2xl border border-gray-200'>
                                            <span className='text-sm font-medium text-gray-700'>System Status</span>
                                            <div className='flex items-center space-x-2'>
                                                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                                <span className='text-sm font-semibold text-green-600'>Active</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between p-3 bg-white/60 rounded-2xl border border-gray-200'>
                                            <span className='text-sm font-medium text-gray-700'>Last Updated</span>
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
                                        Quick Actions
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
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/>
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