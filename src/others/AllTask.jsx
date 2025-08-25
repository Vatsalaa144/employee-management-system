import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

const [userData] = useContext(AuthContext)

    return (
        <div className='p-4text-gray-900 bg-white/70 backdrop-blur-sm border border-slate-200 shadow-xl rounded-2xl p-6 animate-fade-in'>
            <h2 className='p-4  text-2xl font-bold text-slate-800 mb-6'>Team Overview</h2>
            
            {/* Header */}
            <div className='p-4 text-gray-900 bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200 rounded-xl mb-4'>
                <div className='p-4  grid grid-cols-2 sm:grid-cols-5 gap-4 text-sm sm:text-base font-semibold text-slate-700'>
                    <div className='p-4 text-gray-900 col-span-2 sm:col-span-1'>Employee Name</div>
                    <div className='p-4 text-gray-900 hidden sm:block'>New Tasks</div>
                    <div className='p-4 text-gray-900 hidden sm:block'>Active Tasks</div>
                    <div className='p-4 text-gray-900 hidden sm:block'>Completed</div>
                    <div className='p-4 text-gray-900 hidden sm:block'>Failed</div>
                    <div className='p-4 text-gray-900 sm:hidden'>Tasks Overview</div>
                </div>
            </div>

            {/* Task List */}
            <div id='alltask' className='p-4 text-gray-900 max-h-80 overflow-auto space-y-3'>
                {userData?.map(function (elem, idx) {
                    return (
                        <div key={idx} className=' text-gray-900 bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200'>
                            {/* Desktop Layout */}
                            <div className='p-4 text-gray-900 hidden sm:grid sm:grid-cols-5 gap-4 items-center text-sm lg:text-base'>
                                <div className='p-4  font-semibold text-slate-800 flex items-center'>
                                    <div className='p-4  w-8 h-8 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mr-3 text-slate-700 font-bold'>
                                        {elem.firstname?.charAt(0)}
                                    </div>
                                    {elem.firstname}
                                </div>
                                <div className='p-4 text-gray-900 text-center'>
                                    <span className='p-4  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800'>
                                        {elem.task_count.new_task}
                                    </span>
                                </div>
                                <div className='p-4 text-gray-900 text-center'>
                                    <span className='p-4  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800'>
                                        {elem.task_count.active}
                                    </span>
                                </div>
                                <div className='p-4 text-gray-900 text-center'>
                                    <span className='p-4  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800'>
                                        {elem.task_count.completed_task}
                                    </span>
                                </div>
                                <div className='p-4 text-gray-900 text-center'>
                                    <span className='p-4  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-100 text-fuchsia-800'>
                                        {elem.task_count.failed_task}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className='p-4 text-gray-900 sm:hidden'>
                                <div className='p-4 text-gray-900 flex items-center mb-3'>
                                    <div className='p-4  w-10 h-10 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mr-3 text-slate-700 font-bold'>
                                        {elem.firstname?.charAt(0)}
                                    </div>
                                    <div className='p-4  font-semibold text-slate-800 text-lg'>
                                        {elem.firstname}
                                    </div>
                                </div>
                                <div className='p-4 text-gray-900 grid grid-cols-2 gap-3'>
                                    <div className='p-4 text-gray-900 flex justify-between items-center'>
                                        <span className='p-4  text-slate-600 text-sm'>New:</span>
                                        <span className='p-4  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800'>
                                            {elem.task_count.new_task}
                                        </span>
                                    </div>
                                    <div className='p-4 text-gray-900 flex justify-between items-center'>
                                        <span className='p-4  text-slate-600 text-sm'>Active:</span>
                                        <span className='p-4  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800'>
                                            {elem.task_count.active}
                                        </span>
                                    </div>
                                    <div className='p-4 text-gray-900 flex justify-between items-center'>
                                        <span className='p-4 text-slate-600 text-sm'>Completed:</span>
                                        <span className='p-4  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800'>
                                            {elem.task_count.completed_task}
                                        </span>
                                    </div>
                                    <div className='p-4 text-gray-900 flex justify-between items-center'>
                                        <span className='p-4  text-slate-600 text-sm'>Failed:</span>
                                        <span className='p-4  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-fuchsia-100 text-fuchsia-800'>
                                            {elem.task_count.failed_task}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask