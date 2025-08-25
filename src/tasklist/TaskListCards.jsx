import React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskListCards = ({data}) => {
    const [filter, setFilter] = useState('all')
    
    const filterButtons = [
        { key: 'all', label: 'All Tasks', icon: '📋', color: 'indigo' },
        { key: 'new', label: 'New', icon: '📝', color: 'blue' },
        { key: 'active', label: 'In Progress', icon: '🚀', color: 'orange' },
        { key: 'completed', label: 'Completed', icon: '✅', color: 'green' },
        { key: 'failed', label: 'Failed', icon: '⚠️', color: 'red' }
    ]

    const getFilteredTasks = () => {
        if (!data?.task) return []
        
        if (filter === 'all') return data.task
        if (filter === 'new') return data.task.filter(task => task.new_task)
        if (filter === 'active') return data.task.filter(task => task.active)
        if (filter === 'completed') return data.task.filter(task => task.completed_task)
        if (filter === 'failed') return data.task.filter(task => task.failed_task)
        
        return data.task
    }

    const filteredTasks = getFilteredTasks()

    return (
        <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 rounded-3xl'></div>
            
            {/* Content */}
            <div className='relative z-10 p-6 sm:p-8'>
                {/* Header */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0'>
                    <div className='flex items-center space-x-4'>
                        <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8H9m0 0V9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V9z'/>
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-gray-800'>Your Tasks</h2>
                            <p className='text-gray-600'>Manage and track your assignments</p>
                        </div>
                    </div>
                    
                    {/* Task Count */}
                    <div className='flex items-center space-x-2 bg-white/60 rounded-2xl px-4 py-2 border border-gray-200'>
                        <div className='w-2 h-2 bg-indigo-400 rounded-full animate-pulse'></div>
                        <span className='text-sm font-medium text-gray-700'>
                            {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
                        </span>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className='flex flex-wrap gap-2 mb-8 p-2 bg-white/50 rounded-2xl border border-gray-200'>
                    {filterButtons.map((button) => (
                        <button
                            key={button.key}
                            onClick={() => setFilter(button.key)}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-105 ${
                                filter === button.key
                                    ? `bg-gradient-to-r from-${button.color}-500 to-${button.color}-600 text-white shadow-md`
                                    : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-gray-200'
                            }`}
                        >
                            <span>{button.icon}</span>
                            <span>{button.label}</span>
                            {button.key !== 'all' && (
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                    filter === button.key 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {button.key === 'new' && (data?.task_count?.new_task || 0)}
                                    {button.key === 'active' && (data?.task_count?.active || 0)}
                                    {button.key === 'completed' && (data?.task_count?.completed_task || 0)}
                                    {button.key === 'failed' && (data?.task_count?.failed_task || 0)}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                
                {/* Task Cards Container */}
                <div 
                    className='relative'
                    style={{ minHeight: '400px' }}
                >
                    {filteredTasks.length > 0 ? (
                        <div 
                            className='flex gap-6 pb-4 overflow-x-auto overflow-y-hidden'
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(148, 163, 184, 0.3) transparent',
                                minHeight: '380px'
                            }}
                        >
                            {filteredTasks.map((elem, idx) => {
                                if(elem.active && (filter === 'all' || filter === 'active')){
                                    return <AcceptTask key={`active-${idx}`} data={elem} />
                                }
                                if(elem.new_task && (filter === 'all' || filter === 'new')){
                                    return <NewTask key={`new-${idx}`} data={elem} />
                                }
                                if(elem.completed_task && (filter === 'all' || filter === 'completed')){
                                    return <CompleteTask key={`completed-${idx}`} data={elem} />
                                }
                                if(elem.failed_task && (filter === 'all' || filter === 'failed')){
                                    return <FailedTask key={`failed-${idx}`} data={elem} />
                                }
                                return null
                            })}
                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center h-80 text-center'>
                            <div className='w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center mb-6'>
                                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8H9m0 0V9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V9z'/>
                                </svg>
                            </div>
                            <h3 className='text-xl font-bold text-gray-600 mb-2'>
                                {filter === 'all' ? 'No Tasks Yet' : `No ${filterButtons.find(b => b.key === filter)?.label} Tasks`}
                            </h3>
                            <p className='text-gray-500 max-w-sm'>
                                {filter === 'all' 
                                    ? 'Your assigned tasks will appear here. Check back later for new assignments!'
                                    : `You don't have any ${filterButtons.find(b => b.key === filter)?.label.toLowerCase()} tasks at the moment.`
                                }
                            </p>
                            
                            {filter !== 'all' && (
                                <button
                                    onClick={() => setFilter('all')}
                                    className='mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg'
                                >
                                    View All Tasks
                                </button>
                            )}
                        </div>
                    )}
                </div>
                
                {/* Scroll Indicator */}
                {filteredTasks.length > 2 && (
                    <div className='flex justify-center mt-6'>
                        <div className='flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-2xl border border-gray-200'>
                            <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 5l7 7-7 7M5 5l7 7-7 7'/>
                            </svg>
                            <span className='text-sm text-gray-600'>Scroll to view more tasks</span>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .overflow-x-auto::-webkit-scrollbar {
                    height: 8px;
                }
                .overflow-x-auto::-webkit-scrollbar-track {
                    background: rgba(148, 163, 184, 0.1);
                    border-radius: 10px;
                }
                .overflow-x-auto::-webkit-scrollbar-thumb {
                    background: rgba(148, 163, 184, 0.3);
                    border-radius: 10px;
                }
                .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                    background: rgba(148, 163, 184, 0.5);
                }
            `}</style>
        </div>
    )
}

export default TaskListCardsimport React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskListCards = ({data}) => {
    const [filter, setFilter] = useState('all')
    
    const filterButtons = [
        { key: 'all', label: 'All Tasks', icon: '📋', color: 'indigo' },
        { key: 'new', label: 'New', icon: '📝', color: 'blue' },
        { key: 'active', label: 'In Progress', icon: '🚀', color: 'orange' },
        { key: 'completed', label: 'Completed', icon: '✅', color: 'green' },
        { key: 'failed', label: 'Failed', icon: '⚠️', color: 'red' }
    ]

    const getFilteredTasks = () => {
        if