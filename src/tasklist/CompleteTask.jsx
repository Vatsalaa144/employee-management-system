import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='flex-shrink-0 w-80 sm:w-[350px] bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl'></div>
                <div className='absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-full blur-xl'></div>
            </div>
            
            {/* Content */}
            <div className='relative z-10 p-6 h-full flex flex-col'>
                {/* Header */}
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-md'>
                            <span className='text-lg'>✅</span>
                        </div>
                        <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-300'>
                            {data.category}
                        </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <span className='text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200'>
                            {data.date}
                        </span>
                    </div>
                </div>
                
                {/* Task Content */}
                <div className='flex-1 mb-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-200'>
                        {data.title}
                    </h2>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4'>
                        {data.description}
                    </p>
                    
                    {/* Completion Badge */}
                    <div className='mb-4'>
                        <div className='flex items-center space-x-2 p-3 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-2xl'>
                            <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7'/>
                                </svg>
                            </div>
                            <span className='text-sm font-semibold text-green-800'>Task Completed Successfully</span>
                        </div>
                    </div>
                    
                    {/* Task Metadata */}
                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2 text-xs text-gray-500'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'/>
                            </svg>
                            <span>Completed on: {new Date(data.date).toLocaleDateString()}</span>
                        </div>
                        <div className='flex items-center space-x-2 text-xs text-green-600'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                            </svg>
                            <span>Successfully Finished</span>
                        </div>
                    </div>
                </div>

                {/* Completion Status */}
                <div className='space-y-3'>
                    <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-md relative overflow-hidden'>
                        <div className='flex items-center justify-center space-x-2 relative z-10'>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'/>
                            </svg>
                            <span>Task Completed</span>
                        </div>
                        
                        {/* Animated success particles */}
                        <div className='absolute inset-0 opacity-20'>
                            <div className='absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-ping'></div>
                            <div className='absolute bottom-3 right-6 w-1 h-1 bg-white rounded-full animate-pulse'></div>
                            <div className='absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300'></div>
                        </div>
                    </div>
                    
                    {/* Achievement Badge */}
                    <div className='flex items-center justify-center space-x-2'>
                        <div className='flex items-center space-x-1'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <div className='w-2 h-2 bg-emerald-400 rounded-full'></div>
                            <div className='w-2 h-2 bg-green-300 rounded-full'></div>
                        </div>
                        <span className='text-xs font-medium text-green-600'>Well Done! 🎉</span>
                    </div>
                    
                    {/* Performance Stats */}
                    <div className='grid grid-cols-2 gap-2 mt-4'>
                        <div className='text-center p-2 bg-white/60 rounded-xl border border-green-200'>
                            <div className='text-lg font-bold text-green-600'>100%</div>
                            <div className='text-xs text-gray-600'>Quality</div>
                        </div>
                        <div className='text-center p-2 bg-white/60 rounded-xl border border-green-200'>
                            <div className='text-lg font-bold text-green-600'>On Time</div>
                            <div className='text-xs text-gray-600'>Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-green-400/0 to-emerald-500/0 group-hover:from-green-400/5 group-hover:to-emerald-500/5 transition-all duration-300 rounded-3xl pointer-events-none'></div>
            
            {/* Success Confetti Effect */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden rounded-3xl'>
                <div className='absolute top-4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-100'></div>
                <div className='absolute top-8 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-bounce delay-300'></div>
                <div className='absolute bottom-12 left-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-bounce delay-500'></div>
            </div>
        </div>
    )
}

export default CompleteTask