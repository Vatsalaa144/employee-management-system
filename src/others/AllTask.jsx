import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('name')

    const filteredData = userData?.filter(employee => 
        employee.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []

    const sortedData = filteredData.sort((a, b) => {
        if (sortBy === 'name') return a.firstname.localeCompare(b.firstname)
        if (sortBy === 'tasks') return b.task?.length - a.task?.length
        if (sortBy === 'completed') return b.task_count.completed_task - a.task_count.completed_task
        return 0
    })

    return (
        <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl'></div>
            
            {/* Content */}
            <div className='relative z-10 p-6 sm:p-8'>
                {/* Header */}
                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 space-y-4 lg:space-y-0'>
                    <div className='flex items-center space-x-4'>
                        <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'/>
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-gray-800'>Team Overview</h2>
                            <p className='text-gray-600'>Track your team's progress and performance</p>
                        </div>
                    </div>
                    
                    {/* Controls */}
                    <div className='flex items-center space-x-4 w-full lg:w-auto'>
                        {/* Search */}
                        <div className='relative flex-1 lg:flex-none lg:w-64'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search employees..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300'
                            />
                        </div>
                        
                        {/* Sort */}
                        <div className='relative'>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className='appearance-none bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 pr-10 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300'
                            >
                                <option value="name">Sort by Name</option>
                                <option value="tasks">Sort by Tasks</option>
                                <option value="completed">Sort by Completed</option>
                            </select>
                            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7'/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                    <div className='bg-white/60 rounded-2xl p-4 border border-gray-200'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center'>
                                <svg className='w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'/>
                                </svg>
                            </div>
                            <div>
                                <div className='text-2xl font-bold text-gray-800'>{userData?.length || 0}</div>
                                <div className='text-xs text-gray-500'>Team Members</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white/60 rounded-2xl p-4 border border-gray-200'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center'>
                                <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                                </svg>
                            </div>
                            <div>
                                <div className='text-2xl font-bold text-gray-800'>
                                    {userData?.reduce((sum, emp) => sum + emp.task_count.completed_task, 0) || 0}
                                </div>
                                <div className='text-xs text-gray-500'>Completed Tasks</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white/60 rounded-2xl p-4 border border-gray-200'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center'>
                                <svg className='w-5 h-5 text-orange-600' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd'/>
                                </svg>
                            </div>
                            <div>
                                <div className='text-2xl font-bold text-gray-800'>
                                    {userData?.reduce((sum, emp) => sum + emp.task_count.active, 0) || 0}
                                </div>
                                <div className='text-xs text-gray-500'>Active Tasks</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white/60 rounded-2xl p-4 border border-gray-200'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center'>
                                <svg className='w-5 h-5 text-purple-600' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'/>
                                </svg>
                            </div>
                            <div>
                                <div className='text-2xl font-bold text-gray-800'>
                                    {userData?.reduce((sum, emp) => sum + emp.task_count.new_task, 0) || 0}
                                </div>
                                <div className='text-xs text-gray-500'>New Tasks</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Header - Desktop */}
                <div className='hidden lg:block bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-2xl mb-6 p-4'>
                    <div className='grid grid-cols-6 gap-4 text-sm font-semibold text-gray-700'>
                        <div className='col-span-2'>Employee</div>
                        <div className='text-center'>New Tasks</div>
                        <div className='text-center'>In Progress</div>
                        <div className='text-center'>Completed</div>
                        <div className='text-center'>Failed</div>
                    </div>
                </div>

                {/* Employee List */}
                <div className='space-y-4 max-h-96 overflow-y-auto'>
                    {sortedData.length > 0 ? (
                        sortedData.map((elem, idx) => (
                            <div key={idx} className='bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-gray-300 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 group'>
                                {/* Desktop Layout */}
                                <div className='hidden lg:grid lg:grid-cols-6 gap-4 items-center'>
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <div className='relative'>
                                            <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200'>
                                                <span className='text-lg font-bold text-white'>
                                                    {elem.firstname?.charAt(0)}
                                                </span>
                                            </div>
                                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full'></div>
                                        </div>
                                        <div>
                                            <div className='font-semibold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors duration-200'>
                                                {elem.firstname}
                                            </div>
                                            <div className='text-sm text-gray-500'>{elem.email}</div>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-2xl'>
                                            <span className='text-lg font-bold text-blue-700'>{elem.task_count.new_task}</span>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl'>
                                            <span className='text-lg font-bold text-orange-700'>{elem.task_count.active}</span>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-2xl'>
                                            <span className='text-lg font-bold text-green-700'>{elem.task_count.completed_task}</span>
                                        </div>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-2xl'>
                                            <span className='text-lg font-bold text-red-700'>{elem.task_count.failed_task}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className='lg:hidden'>
                                    <div className='flex items-center space-x-4 mb-4'>
                                        <div className='relative'>
                                            <div className='w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md'>
                                                <span className='text-xl font-bold text-white'>
                                                    {elem.firstname?.charAt(0)}
                                                </span>
                                            </div>
                                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full'></div>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='font-semibold text-gray-800 text-lg'>{elem.firstname}</div>
                                            <div className='text-sm text-gray-500'>{elem.email}</div>
                                        </div>
                                    </div>
                                    
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div className='flex justify-between items-center p-3 bg-blue-50 rounded-xl'>
                                            <span className='text-sm font-medium text-gray-700'>New:</span>
                                            <span className='text-lg font-bold text-blue-700'>{elem.task_count.new_task}</span>
                                        </div>
                                        <div className='flex justify-between items-center p-3 bg-orange-50 rounded-xl'>
                                            <span className='text-sm font-medium text-gray-700'>Active:</span>
                                            <span className='text-lg font-bold text-orange-700'>{elem.task_count.active}</span>
                                        </div>
                                        <div className='flex justify-between items-center p-3 bg-green-50 rounded-xl'>
                                            <span className='text-sm font-medium text-gray-700'>Done:</span>
                                            <span className='text-lg font-bold text-green-700'>{elem.task_count.completed_task}</span>
                                        </div>
                                        <div className='flex justify-between items-center p-3 bg-red-50 rounded-xl'>
                                            <span className='text-sm font-medium text-gray-700'>Failed:</span>
                                            <span className='text-lg font-bold text-red-700'>{elem.task_count.failed_task}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='text-center py-12'>
                            <div className='w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4'>
                                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'/>
                                </svg>
                            </div>
                            <h3 className='text-lg font-semibold text-gray-600 mb-2'>No employees found</h3>
                            <p className='text-gray-500'>Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllTask