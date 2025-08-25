import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='flex-shrink-0 w-80 sm:w-[350px] bg-gradient-to-br from-red-50 to-pink-100 border border-red-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-2xl'></div>
                <div className='absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-pink-400 to-red-500 rounded-full blur-xl'></div>
            </div>
            
            {/* Content */}
            <div className='relative z-10 p-6 h-full flex flex-col'>
                {/* Header */}
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-md'>
                            <span className='text-lg'>⚠️</span>
                        </div>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-300'>
                            {data.category}
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium text-red-700 bg-red-100 px-3 py-1 rounded-full border border-red-200'>
                            {data.date}
                        </span>
                    </div>
                </div>
                
                {/* Task Content */}
                <div className='flex-1 mb-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-200'>
                        {data.title}
                    </h2>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4'>
                        {data.description}
                    </p>
                    
                    {/* Issue Alert */}
                    <div className='mb-4'>
                        <div className='flex items-start space-x-3 p-3 bg-gradient-to-r from-red-100 to-pink-100 border border-red-200 rounded-2xl'>
                            <div className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/>
                                </svg>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-red-800 mb-1'>Task Needs Attention</p>
                                <p className='text-xs text-red-600'>Review required for completion or reassignment</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Task Metadata */}
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2 text-xs text-gray-500'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/>
                            </svg>
                            <span>Due Date: {new Date(data.date).toLocaleDateString()}</span>
                        </div>
                        <div className='flex items-center space-x-2 text-xs text-red-600'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clipRule='evenodd'/>
                            </svg>
                            <span>Requires Review</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='space-y-3'>
                    <div className='grid grid-cols-2 gap-3'>
                        <button className='bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-md hover:shadow-lg text-sm'>
                            <div className='flex items-center justify-center space-x-1'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'/>
                                </svg>
                                <span>Retry</span>
                            </div>
                        </button>
                        
                        <button className='bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-500/20 shadow-md hover:shadow-lg text-sm'>
                            <div className='flex items-center justify-center space-x-1'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'/>
                                </svg>
                                <span>Get Help</span>
                            </div>
                        </button>
                    </div>
                    
                    {/* Main Action Button */}
                    <button className='w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500/20 shadow-md hover:shadow-lg'>
                        <div className='flex items-center justify-center space-x-2'>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/>
                            </svg>
                            <span>Report Issue Details</span>
                        </div>
                    </button>
                    
                    {/* Status Indicator */}
                    <div className='flex items-center justify-center space-x-2'>
                        <div className='flex items-center space-x-1'>
                            <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
                            <div className='w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100'></div>
                            <div className='w-2 h-2 bg-red-300 rounded-full animate-pulse delay-200'></div>
                        </div>
                        <span className='text-xs font-medium text-red-600'>Needs Attention</span>
                    </div>
                    
                    {/* Support Info */}
                    <div className='text-center mt-4'>
                        <p className='text-xs text-gray-500 mb-2'>Need help with this task?</p>
                        <div className='flex items-center justify-center space-x-4 text-xs'>
                            <a href='#' className='text-blue-600 hover:text-blue-700 font-medium'>Contact Support</a>
                            <span className='text-gray-300'>|</span>
                            <a href='#' className='text-purple-600 hover:text-purple-700 font-medium'>View Guidelines</a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-red-400/0 to-pink-500/0 group-hover:from-red-400/5 group-hover:to-pink-500/5 transition-all duration-300 rounded-3xl pointer-events-none'></div>
            
            {/* Warning Pulse Effect */}
            <div className='absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-ping'></div>
        </div>
    )
}

export default FailedTask