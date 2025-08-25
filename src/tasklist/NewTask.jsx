import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 w-80 sm:w-[350px] bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl'></div>
                <div className='absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-indigo-400 to-blue-500 rounded-full blur-xl'></div>
            </div>
            
            {/* Content */}
            <div className='relative z-10 p-6 h-full flex flex-col'>
                {/* Header */}
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md'>
                            <span className='text-lg'>📝</span>
                        </div>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-300'>
                            {data.category}
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200'>
                            {data.date}
                        </span>
                    </div>
                </div>
                
                {/* Task Content */}
                <div className='flex-1 mb-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200'>
                        {data.title}
                    </h2>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4'>
                        {data.description}
                    </p>
                    
                    {/* Task Metadata */}
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2 text-xs text-gray-500'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/>
                            </svg>
                            <span>Due: {new Date(data.date).toLocaleDateString()}</span>
                        </div>
                        <div className='flex items-center space-x-2 text-xs text-blue-600'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'/>
                            </svg>
                            <span>New Assignment</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className='space-y-3'>
                    <button className='w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-md hover:shadow-lg group-hover:shadow-xl'>
                        <div className='flex items-center justify-center space-x-2'>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'/>
                            </svg>
                            <span>Accept Task</span>
                        </div>
                    </button>
                    
                    {/* Priority Indicator */}
                    <div className='flex items-center justify-center space-x-2'>
                        <div className='flex items-center space-x-1'>
                            <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                            <div className='w-2 h-2 bg-blue-300 rounded-full'></div>
                            <div className='w-2 h-2 bg-blue-200 rounded-full'></div>
                        </div>
                        <span className='text-xs font-medium text-blue-600'>Ready to Start</span>
                    </div>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-400/0 to-indigo-500/0 group-hover:from-blue-400/5 group-hover:to-indigo-500/5 transition-all duration-300 rounded-3xl pointer-events-none'></div>
        </div>
    )
}

export default NewTask