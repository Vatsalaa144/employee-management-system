import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='p-4 text-gray-900 flex-shrink-0 w-80 sm:w-[330px] h-full bg-gradient-to-br from-fuchsia-50 to-stone-100 border border-fuchsia-200 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] animate-slide-in'>
            <div className='p-4 text-gray-900 flex justify-between items-center mb-4'>
                <span className='p-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200'>
                    {data.category}
                </span>
                <span className='p-4 text-sm font-medium text-fuchsia-700 bg-fuchsia-100 px-3 py-1 rounded-full border border-fuchsia-200'>
                    {data.date}
                </span>
            </div>
            
            <div className='p-4 text-gray-900 mb-6'>
                <h2 className='p-4 text-xl font-bold text-slate-800 mb-2 line-clamp-2'>{data.title}</h2>
                <p className='p-4 text-sm text-slate-600 leading-relaxed line-clamp-3'>{data.description}</p>
            </div>

            <div className='p-4 text-gray-900 flex items-center justify-center mt-auto'>
                <div className='p-4 text-gray-900 flex items-center space-x-2 bg-gradient-to-r from-fuchsia-100 to-stone-100 border-2 border-fuchsia-300 rounded-xl px-6 py-3'>
                    <div className='p-4 text-gray-900 w-3 h-3 bg-fuchsia-500 rounded-full'></div>
                    <span className='p-4 font-semibold text-fuchsia-800'>Failed</span>
                    <div className='p-4 text-fuchsia-600'>✗</div>
                </div>
            </div>

            <div className='p-4 text-gray-900 mt-4 text-center'>
                <span className='p-4 text-xs text-fuchsia-600 font-medium bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-200'>
                    Needs Review & Action
                </span>
            </div>
        </div>
    )
}

export default FailedTask