import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskListCards from '../tasklist/TaskListCards'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-1/3 -left-1/4 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-1/3 -right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-r from-green-100/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000'></div>
      </div>
      
      {/* Main Content */}
      <div className='relative z-10 p-4 sm:p-6 lg:p-10'>
        <div className='max-w-7xl mx-auto space-y-8'>
          {/* Header */}
          <Header changeUser={props.changeUser} firstName={props.data?.firstname} />
          
          {/* Task Statistics */}
          <TaskListNumbers data={props.data} />
          
          {/* Main Content Grid */}
          <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
            {/* Task Cards - Takes 3 columns */}
            <div className='xl:col-span-3'>
              <TaskListCards data={props.data} />
            </div>
            
            {/* Sidebar - Takes 1 column */}
            <div className='space-y-6'>
              {/* Today's Focus */}
              <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/50 rounded-3xl'></div>
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-gray-800 mb-4 flex items-center'>
                    <svg className='w-5 h-5 mr-2 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                    </svg>
                    Today's Focus
                  </h3>
                  <div className='space-y-3'>
                    <div className='p-4 bg-white/60 rounded-2xl border border-gray-200'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-sm font-semibold text-gray-800'>Priority Tasks</span>
                        <span className='text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full'>
                          {props.data?.task_count?.new_task || 0} new
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div 
                          className='bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500'
                          style={{ 
                            width: `${((props.data?.task_count?.completed_task || 0) / Math.max((props.data?.task?.length || 1), 1)) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <p className='text-xs text-gray-500 mt-2'>
                        {props.data?.task_count?.completed_task || 0} of {props.data?.task?.length || 0} completed
                      </p>
                    </div>
                    
                    <div className='p-4 bg-white/60 rounded-2xl border border-gray-200'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-medium text-gray-700'>Streak</span>
                        <div className='flex items-center space-x-1'>
                          <span className='text-lg font-bold text-orange-600'>7</span>
                          <span className='text-xs text-gray-500'>days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl'></div>
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-gray-800 mb-4 flex items-center'>
                    <svg className='w-5 h-5 mr-2 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z'/>
                    </svg>
                    Quick Actions
                  </h3>
                  <div className='space-y-3'>
                    <button className='w-full flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md group'>
                      <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4'/>
                        </svg>
                      </div>
                      <span className='text-sm font-medium text-gray-800'>Request Time Off</span>
                    </button>
                    
                    <button className='w-full flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md group'>
                      <div className='w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'/>
                        </svg>
                      </div>
                      <span className='text-sm font-medium text-gray-800'>Send Message</span>
                    </button>
                    
                    <button className='w-full flex items-center space-x-3 p-3 bg-white/60 hover:bg-white/80 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-md group'>
                      <div className='w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/>
                        </svg>
                      </div>
                      <span className='text-sm font-medium text-gray-800'>View Reports</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Performance Insights */}
              <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 rounded-3xl'></div>
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-gray-800 mb-4 flex items-center'>
                    <svg className='w-5 h-5 mr-2 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/>
                    </svg>
                    This Week
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Completion Rate</span>
                      <span className='text-sm font-bold text-green-600'>
                        {props.data?.task_count?.completed_task && props.data?.task?.length 
                          ? Math.round((props.data.task_count.completed_task / props.data.task.length) * 100)
                          : 0}%
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Active Tasks</span>
                      <span className='text-sm font-bold text-blue-600'>{props.data?.task_count?.active || 0}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-600'>Avg. Response</span>
                      <span className='text-sm font-bold text-purple-600'>2.3h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard