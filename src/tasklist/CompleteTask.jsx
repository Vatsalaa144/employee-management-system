import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='p-4 text-gray-900 flex-shrink-0 w-80 sm:w-[330px] h-full bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] animate-slide-in'>
            <div className='p-4 text-gray-900 flex justify-between items-center mb-4'>
                <span className='p-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200'>
                    {data.category}
                </span>
                <span className='p-4 text-sm font-medium text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200'>
                    {data.date}
                </span>
            </div>
            
            <div className='p-4 text-gray-900 mb-6'>
                <h2 className='p-4 text-xl font-bold text-slate-800 mb-2 line-clamp-2'>{data.title}</h2>
                <p className='p-4 text-sm text-slate-600 leading-relaxed line-clamp-3'>{data.description}</p>
            </div>

            <div className='p-4 text-gray-900 flex items-center justify-center mt-auto'>
                <div className='p-4 text-gray-900 flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-xl px-6 py-3'>
                    <div className='p-4 text-gray-900 w-3 h-3 bg-emerald-400 rounded-full'></div>
                    <span className='p-4 font-semibold text-emerald-800'>Completed</span>
                    <div className='p-4 text-emerald-600'>✓</div>
                </div>
            </div>

            <div className='p-4 text-gray-900 mt-4 text-center'>
                <span className='p-4 text-xs text-cyan-600 font-medium bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200'>
                    Task Successfully Done
                </span>
            </div>
        </div>
    )
}

export default CompleteTask