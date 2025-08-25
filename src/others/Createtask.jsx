import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Createtask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [tasktittle, settasktittle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

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
        };

        // Create a new userData array with updated tasks
        const updatedUserData = userData.map(user => {
            if (user.firstname === assignTo) {
                return {
                    ...user,
                    task: [...user.task, newTask], // Add new task
                    task_count: {
                        ...user.task_count,
                        new_task: user.task_count.new_task + 1
                    }
                };
            }
            return user;
        });

        setUserData(updatedUserData); // Update the state properly

        // Clear form fields
        settasktittle('');
        settaskDate('');
        setassignTo('');
        setcategory('');
        settaskDescription('');
    };

    return (
        <div className='p-4 text-gray-900 bg-white/70 backdrop-blur-sm border border-slate-200 shadow-xl rounded-2xl animate-fade-in'>
            <h2 className='p-4  text-2xl font-bold text-slate-800 mb-6'>Create New Task</h2>
            
            <form onSubmit={(e) => { submitHandler(e) }} className='p-4 text-gray-900 space-y-6'>
                <div className='p-4 text-gray-900 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Left Column - Basic Info */}
                    <div className='p-4 text-gray-900 space-y-6'>
                        <div>
                            <label className='p-4  block text-sm font-semibold text-slate-700 mb-2'>
                                Task Title
                            </label>
                            <input  
                                value={tasktittle}
                                onChange={(e) => { settasktittle(e.target.value) }}
                                required
                                className='p-4  w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200'
                                type="text" 
                                placeholder='e.g., Create UI design mockups'
                            />
                        </div>

                        <div>
                            <label className='p-4  block text-sm font-semibold text-slate-700 mb-2'>
                                Due Date
                            </label>
                            <input  
                                value={taskDate}
                                onChange={(e) => { settaskDate(e.target.value) }}
                                required
                                className='p-4  w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200'
                                type="date"
                            />
                        </div>

                        <div>
                            <label className='p-4  block text-sm font-semibold text-slate-700 mb-2'>
                                Assign To
                            </label>
                            <input  
                                value={assignTo}
                                onChange={(e) => { setassignTo(e.target.value) }}
                                required
                                className='p-4  w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200'
                                type="text" 
                                placeholder='Employee name'
                                list='employees'
                            />
                            <datalist id='employees'>
                                {userData?.map((employee, index) => (
                                    <option key={index} value={employee.firstname} />
                                ))}
                            </datalist>
                        </div>

                        <div>
                            <label className='p-4  block text-sm font-semibold text-slate-700 mb-2'>
                                Category
                            </label>
                            <input  
                                value={category}
                                onChange={(e) => { setcategory(e.target.value) }}
                                required
                                className='p-4  w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200'
                                type="text" 
                                placeholder='e.g., Design, Development, Research'
                                list='categories'
                            />
                            <datalist id='categories'>
                                <option value="Design" />
                                <option value="Development" />
                                <option value="Research" />
                                <option value="Testing" />
                                <option value="Documentation" />
                                <option value="Meetings" />
                                <option value="Training" />
                            </datalist>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className='p-4 text-gray-900 space-y-6'>
                        <div className='p-4 text-gray-900 h-full flex flex-col'>
                            <label className='p-4  block text-sm font-semibold text-slate-700 mb-2'>
                                Task Description
                            </label>
                            <textarea  
                                value={taskDescription}
                                onChange={(e) => { settaskDescription(e.target.value) }}
                                required
                                rows={8}
                                className='p-4 flex-1 w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200'
                                placeholder='Provide detailed description of the task, requirements, and expected deliverables...'
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className='p-4 text-gray-900 pt-4 border-t border-slate-200'>
                    <button  
                        type='submit'
                        className='p-4 w-full sm:w-auto bg-gradient-to-r from-emerald-100 to-cyan-100 hover:from-emerald-200 hover:to-cyan-200 text-slate-800 font-semibold py-3 px-8 rounded-xl border border-emerald-200 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-200'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Createtask