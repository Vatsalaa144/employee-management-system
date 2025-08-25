import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='p-4 text-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in'>
        <div className='p-4 text-gray-900 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]'>
            <div className='p-4 text-gray-900 flex items-center justify-between mb-2'>
                <div className='p-4 text-gray-900 w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center'>
                    <span className='p-4  text-emerald-700 text-xl font-bold'>📝</span>
                </div>
                <span className='p-4  text-3xl sm:text-4xl font-bold text-emerald-700'>
                    {data?.task_count?.new_task || 0}
                </span>
            </div>
            <h3 className='p-4  text-lg font-semibold text-emerald-800'>New Tasks</h3>
            <p className='p-4  text-sm text-emerald-600 mt-1'>Ready to start</p>
        </div>
        
        <div className='p-4 text-gray-900 bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]'>
            <div className='p-4 text-gray-900 flex items-center justify-between mb-2'>
                <div className='p-4 text-gray-900 w-12 h-12 bg-cyan-200 rounded-xl flex items-center justify-center'>
                    <span className='p-4  text-cyan-700 text-xl font-bold'>✅</span>
                </div>
                <span className='p-4  text-3xl sm:text-4xl font-bold text-cyan-700'>
                    {data?.task_count?.completed_task || 0}
                </span>
            </div>
            <h3 className='p-4  text-lg font-semibold text-cyan-800'>Completed</h3>
            <p className='p-4  text-sm text-cyan-600 mt-1'>Successfully done</p>
        </div>
        
        <div className='p-4 text-gray-900 bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]'>
            <div className='p-4 text-gray-900 flex items-center justify-between mb-2'>
                <div className='p-4 text-gray-900 w-12 h-12 bg-sky-200 rounded-xl flex items-center justify-center'>
                    <span className='p-4  text-sky-700 text-xl font-bold'>🚀</span>
                </div>
                <span className='p-4  text-3xl sm:text-4xl font-bold text-sky-700'>
                    {data?.task_count?.active || 0}
                </span>
            </div>
            <h3 className='p-4  text-lg font-semibold text-sky-800'>Active Tasks</h3>
            <p className='p-4  text-sm text-sky-600 mt-1'>In progress</p>
        </div>
        
        <div className='p-4 text-gray-900 bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 border border-fuchsia-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]'>
            <div className='p-4 text-gray-900 flex items-center justify-between mb-2'>
                <div className='p-4 text-gray-900 w-12 h-12 bg-fuchsia-200 rounded-xl flex items-center justify-center'>
                    <span className='p-4  text-fuchsia-700 text-xl font-bold'>⚠️</span>
                </div>
                <span className='p-4  text-3xl sm:text-4xl font-bold text-fuchsia-700'>
                    {data?.task_count?.failed_task || 0}
                </span>
            </div>
            <h3 className='p-4  text-lg font-semibold text-fuchsia-800'>Failed Tasks</h3>
            <p className='p-4  text-sm text-fuchsia-600 mt-1'>Need attention</p>
        </div>
    </div>
  )
}

export default TaskListNumbers