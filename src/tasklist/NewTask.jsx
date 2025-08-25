import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='p-4 text-gray-900 flex-shrink-0 w-80 sm:w-[330px] h-full bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] animate-slide-in'>
            <div className='p-4 text-gray-900 flex justify-between items-center mb-4'>
                <span className='p-4  inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200'>
                    {data.category}
                </span>
                <span className='p-4  text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200'>
                    {data.date}
                </span>
            </div>
            
            <div className='p-4 text-gray-900 mb-6'>
                <h2 className='p-4  text-xl font-bold text-slate-800 mb-2 line-clamp-2'>{data.title}</h2>
                <p className='p-4  text-sm text-slate-600 leading-relaxed line-clamp-3'>{data.description}</p>
            </div>

            <div className='p-4 text-gray-900 flex items-center justify-center mt-auto'>
                <button className='p-4  w-full bg-gradient-to-r from-sky-100 to-cyan-100 hover:from-sky-200 hover:to-cyan-200 text-sky-800 font-semibold py-3 px-6 rounded-xl border border-sky-200 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-sky-200'>
                    Accept Task
                </button>
            </div>

            <div className='p-4 text-gray-900 mt-4 flex items-center justify-center'>
                <div className='p-4 text-gray-900 w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
                <span className='p-4  ml-2 text-xs text-emerald-600 font-medium'>New Assignment</span>
            </div>
        </div>
    )
}

export default NewTask