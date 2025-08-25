import React from 'react'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskListCards from '../tasklist/TaskListCards'

const EmployeeDashboard = (props) => {
  const displayName = props.data?.firstname || 'Employee'
  
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

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
          {/* Clean Employee Header */}
          <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-6 sm:p-8 relative overflow-hidden'>
            {/* Gradient Background */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/50 rounded-3xl'></div>
            
            {/* Content */}
            <div className='relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between'>
              {/* Left Side - Welcome */}
              <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                {/* Avatar */}
                <div className='relative'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg'>
                    <span className='text-2xl sm:text-3xl font-bold text-white'>
                      {displayName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {/* Status Indicator */}
                  <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-3 border-white rounded-full flex items-center justify-center'>
                    <div className='w-2 h-2 bg-green-600 rounded-full animate-pulse'></div>
                  </div>
                </div>
                
                {/* Welcome Text */}
                <div>
                  <div className='flex items-center space-x-2 mb-1'>
                    <h1 className='text-lg sm:text-xl font-medium text-gray-600'>
                      {getGreeting()}! 👋
                    </h1>
                    <div className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 shadow-sm'>
                      <svg className='w-3 h-3 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd'/>
                      </svg>
                      Employee
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                      {displayName}
                    </span>
                  </div>
                  <p className='text-sm text-gray-500 mt-1'>
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              {/* Right Side - Simple Logout Button */}
              <div className='flex items-center space-x-4 w-full sm:w-auto justify-end'>
                {/* Task Summary */}
                <div className='hidden sm:flex items-center space-x-4'>
                  <div className='flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-2xl border border-gray-200'>
                    <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                    <span className='text-sm font-medium text-gray-700'>
                      {props.data?.task_count?.active || 0} Active
                    </span>
                  </div>
                  <div className='flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-2xl border border-gray-200'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                    <span className='text-sm font-medium text-gray-700'>
                      {props.data?.task_count?.completed_task || 0} Done
                    </span>
                  </div>
                </div>
                
                {/* Beautiful Logout Button */}
                <button
                  onClick={() => {
                    localStorage.setItem('loggedInUser', '')
                    props.changeUser('')
                  }}
                  className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-rose-600 hover:from-red-600 hover:via-pink-600 hover:to-rose-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500/25'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'/>
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            </div>
            
            {/* Employee Quick Info Bar */}
            <div className='mt-6 pt-6 border-t border-gray-200/50'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className='flex items-center space-x-6'>
                  <div className='flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-2xl'>
                    <svg className='w-4 h-4 text-emerald-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                    </svg>
                    <span className='text-sm font-semibold text-emerald-700'>Employee Dashboard</span>
                  </div>
                  
                  <div className='text-sm text-gray-600'>
                    Manage your tasks and track progress
                  </div>
                </div>
                
                {/* Quick Task Stats */}
                <div className='flex items-center space-x-2'>
                  <span className='text-xs font-medium text-gray-500'>Today:</span>
                  <div className='flex items-center space-x-1'>
                    <div className='px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full border border-orange-200'>
                      {props.data?.task_count?.new_task || 0} New
                    </div>
                    <div className='px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200'>
                      {props.data?.task_count?.active || 0} Active
                    </div>
                    <div className='px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full border border-green-200'>
                      {props.data?.task_count?.completed_task || 0} Done
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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