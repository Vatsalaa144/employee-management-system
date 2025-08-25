import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Createtask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [tasktittle, settasktittle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        setTimeout(() => {
            // Create a new task object
            const newTask = {
                title: tasktittle,
                date: taskDate,
                assignTo: assignTo,
                category: category,
                description: taskDescription,
                active: false,
                new_task: true,
                failed_task: false,
                completed_task: false
            }

            // Create a new userData array with updated tasks
            const updatedUserData = userData.map(user => {
                if (user.firstname === assignTo) {
                    return {
                        ...user,
                        task: [...user.task, newTask],
                        task_count: {
                            ...user.task_count,
                            new_task: user.task_count.new_task + 1
                        }
                    }
                }
                return user
            })

            setUserData(updatedUserData)

            // Clear form fields
            settasktittle('')
            settaskDate('')
            setassignTo('')
            setcategory('')
            settaskDescription('')
            
            setIsSubmitting(false)
        }, 1000)
    }

    const categories = [
        'Development', 'Design', 'Research', 'Testing', 
        'Documentation', 'Meetings', 'Training', 'Operations'
    ]

    return (
        <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl'></div>
            
            {/* Content */}
            <div className='relative z-10 p-6 sm:p-8'>
                {/* Header */}
                <div className='flex items-center space-x-4 mb-8'>
                    <div className='w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
                        <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4'/>
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800'>Create New Task</h2>
                        <p className='text-gray-600'>Assign tasks to team members</p>
                    </div>
                </div>
                
                <form onSubmit={submitHandler} className='space-y-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {/* Left Column - Basic Info */}
                        <div className='space-y-6'>
                            {/* Task Title */}
                            <div>
                                <label className='flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3'>
                                    <svg className='w-4 h-4 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'/>
                                    </svg>
                                    <span>Task Title</span>
                                </label>
                                <input  
                                    value={tasktittle}
                                    onChange={(e) => settasktittle(e.target.value)}
                                    required
                                    className='w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300'
                                    type="text" 
                                    placeholder='e.g., Create UI design mockups'
                                />
                            </div>

                            {/* Due Date */}
                            <div>
                                <label className='flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3'>
                                    <svg className='w-4 h-4 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/>
                                    </svg>
                                    <span>Due Date</span>
                                </label>
                                <input  
                                    value={taskDate}
                                    onChange={(e) => settaskDate(e.target.value)}
                                    required
                                    className='w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300'
                                    type="date"
                                />
                            </div>

                            {/* Assign To */}
                            <div>
                                <label className='flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3'>
                                    <svg className='w-4 h-4 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/>
                                    </svg>
                                    <span>Assign To</span>
                                </label>
                                <div className='relative'>
                                    <input  
                                        value={assignTo}
                                        onChange={(e) => setassignTo(e.target.value)}
                                        required
                                        className='w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300'
                                        type="text" 
                                        placeholder='Select employee name'
                                        list='employees'
                                    />
                                    <datalist id='employees'>
                                        {userData?.map((employee, index) => (
                                            <option key={index} value={employee.firstname} />
                                        ))}
                                    </datalist>
                                    <div className='absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                                        <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7'/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Category */}
                            <div>
                                <label className='flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3'>
                                    <svg className='w-4 h-4 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'/>
                                    </svg>
                                    <span>Category</span>
                                </label>
                                <div className='relative'>
                                    <input  
                                        value={category}
                                        onChange={(e) => setcategory(e.target.value)}
                                        required
                                        className='w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300'
                                        type="text" 
                                        placeholder='Select or type category'
                                        list='categories'
                                    />
                                    <datalist id='categories'>
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat} />
                                        ))}
                                    </datalist>
                                </div>
                                
                                {/* Category Pills */}
                                <div className='flex flex-wrap gap-2 mt-3'>
                                    {categories.slice(0, 4).map((cat) => (
                                        <button
                                            key={cat}
                                            type='button'
                                            onClick={() => setcategory(cat)}
                                            className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 hover:scale-105 ${
                                                category === cat 
                                                    ? 'bg-indigo-100 text-indigo-700 border-indigo-300' 
                                                    : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Description */}
                        <div className='space-y-6'>
                            <div className='h-full flex flex-col'>
                                <label className='flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3'>
                                    <svg className='w-4 h-4 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/>
                                    </svg>
                                    <span>Task Description</span>
                                </label>
                                <div className='flex-1 flex flex-col'>
                                    <textarea  
                                        value={taskDescription}
                                        onChange={(e) => settaskDescription(e.target.value)}
                                        required
                                        rows={12}
                                        className='flex-1 w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all duration-300 hover:border-gray-300'
                                        placeholder='Provide detailed description of the task, requirements, and expected deliverables...

• What needs to be accomplished?
• Any specific requirements or constraints?
• Expected deliverables or outcomes?
• Resources or tools needed?
• Success criteria?'
                                    />
                                    <div className='flex items-center justify-between mt-3 text-xs text-gray-500'>
                                        <span>Be specific and clear with your instructions</span>
                                        <span>{taskDescription.length}/1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Section */}
                    <div className='pt-6 border-t border-gray-200'>
                        <div className='flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0'>
                            {/* Task Priority & Settings */}
                            <div className='flex items-center space-x-6'>
                                <div className='flex items-center space-x-2'>
                                    <svg className='w-4 h-4 text-orange-600' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z' clipRule='evenodd'/>
                                    </svg>
                                    <span className='text-sm font-medium text-gray-700'>High Priority</span>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                    <span className='text-sm text-gray-600'>Auto-notify assignee</span>
                                </div>
                            </div>
                            
                            {/* Submit Button */}
                            <button  
                                type='submit'
                                disabled={isSubmitting}
                                className='relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:transform-none disabled:hover:shadow-none focus:outline-none focus:ring-4 focus:ring-indigo-500/20 min-w-[180px]'
                            >
                                {isSubmitting ? (
                                    <div className='flex items-center justify-center'>
                                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2'></div>
                                        Creating Task...
                                    </div>
                                ) : (
                                    <div className='flex items-center justify-center'>
                                        <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4'/>
                                        </svg>
                                        Create Task
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createtask