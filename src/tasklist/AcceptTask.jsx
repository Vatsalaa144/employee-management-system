import React from 'react'

const AcceptTask = ({data}) => {

    return (
        <div className='p-4 text-gray-900 flex-shrink-0 w-80 sm:w-[330px] h-full bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] animate-slide-in'>
            <div className='p-4 text-gray-900 flex justify-between items-center mb-4'>
                <span className='p-4 tinline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200'>
                    {data.category}
                </span>
                <span className='p-4  text-sm font-medium text-sky-700 bg-sky-100 px-3 py-1 rounded-full border border-sky-200'>
                    {data.date}
                </span>
            </div>
            
            <div className='p-4 text-gray-900 mb-4'>
                <h2 className='p-4  text-xl font-bold text-slate-800 mb-2 line-clamp-2'>{data.title}</h2>
                <p className='p-4 text-sm text-slate-600 leading-relaxed line-clamp-3'>{data.description}</p>
            </div>

            <div className='p-4 text-gray-900 flex items-center justify-center space-x-2 mt-auto'>
                <button className='p-4  flex-1 bg-gradient-to-r from-emerald-100 to-emerald-200 hover:from-emerald-200 hover:to-emerald-300 text-emerald-800 font-semibold py-2 px-4 rounded-xl border border-emerald-300 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-200 text-sm'>
                    Complete
                </button>
                <button className='p-4  flex-1 bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 hover:from-fuchsia-200 hover:to-fuchsia-300 text-fuchsia-800 font-semibold py-2 px-4 rounded-xl border border-fuchsia-300 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-fuchsia-200 text-sm'>
                    Mark Failed
                </button>
            </div>

            <div className='p-4 text-gray-900 mt-3 flex items-center justify-center'>
                <div className='p-4 text-gray-900 w-2 h-2 bg-sky-400 rounded-full animate-pulse'></div>
                <span className='p-4  ml-2 text-xs text-sky-600 font-medium'>In Progress</span>
            </div>
        </div>
        
    )
}

export default AcceptTask