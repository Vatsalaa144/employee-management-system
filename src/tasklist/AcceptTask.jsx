import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 w-80 sm:w-[350px] bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-2xl'></div>
                <div className='absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full blur-xl'></div>
            </div>
            
            {/* Content */}
            <div className='relative z-10 p-6 h-full flex flex-col'>
                {/* Header */}
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-md'>
                            <span className='text-lg'>🚀</span>
                        </div>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300'>
                            {data.category}
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium text-orange-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200'>
                            {data.date}
                        </span>
                    </div>
                </div>
                
                {/* Task Content */}
                <div className='flex-1 mb-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200'>
                        {data.title}
                    </h2>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4'>
                        {data.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className='mb-4'>
                        <div className='flex items-center justify-between mb-2'>
                            <span className='text-xs font-medium text-gray-600'>Progress</span>
                            <span className='text-xs font-bold text-orange-600'>In Progress</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2'>
                            <div className='bg-gradient-to-r from-orange-400 to-amber-500 h-2 rounded-full animate-pulse' style={{width: '60%'}}></div>
                        </div>
                    </div>
                    
                    {/* Task Metadata */}
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2 text-xs text-gray-500'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/>
                            </svg>
                            <span>Due: {new Date(data.date).toLocaleDateString()}</span>
                        </div>
                        <div className='flex items-center space-x-2 text-xs text-orange-600'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z' clipRule='evenodd'/>
                            </svg>
                            <span>Currently Working</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='space-y-3'>
                    <div className='grid grid-cols-2 gap-3'>
                        <button className='bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-500/20 shadow-md hover:shadow-lg text-sm'>
                            <div className='flex items-center justify-center space-x-1'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7'/>
                                </svg>
                                <span>Complete</span>
                            </div>
                        </button>
                        
                        <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500/20 shadow-md hover:shadow-lg text-sm'>
                            <div className='flex items-center justify-center space-x-1'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                                </svg>
                                <span>Report Issue</span>
                            </div>
                        </button>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className='flex items-center justify-center space-x-2'>
                        <div className='flex items-center space-x-1'>
                            <div className='w-2 h-2 bg-orange-500 rounded-full animate-ping'></div>
                            <div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse'></div>
                            <div className='w-2 h-2 bg-orange-300 rounded-full'></div>
                        </div>
                        <span className='text-xs font-medium text-orange-600'>Active Task</span>
                    </div>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-orange-400/0 to-amber-500/0 group-hover:from-orange-400/5 group-hover:to-amber-500/5 transition-all duration-300 rounded-3xl pointer-events-none'></div>
        </div>
    )
}

export default AcceptTask