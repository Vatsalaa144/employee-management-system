import React from 'react'

const Numbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-4  '>
        <div className='p-10 rounded-2xl px-6 py-8 w-[45%] bg-pink-500 '>
            <h2 className='font-semibold text-2xl'>{data.task_count.new_task}</h2>
            <h3 className='font-semibold text-2xl'>New Task</h3>
        </div>
        <div className='p-10 rounded-2xl px-6 py-8 w-[45%] bg-amber-500 '>
            <h2 className='font-semibold text-2xl'>{data.task_count.active}</h2>
            <h3 className='font-semibold text-2xl'>Accept Task</h3>
        </div>
        <div className='p-10 rounded-2xl px-6 py-8 w-[45%] bg-violet-500 '>
            <h2 className='font-semibold text-2xl'>{data.task_count.completed_task}</h2>
            <h3 className='font-semibold text-2xl'>Completed Task</h3>
        </div>
        <div className='p-10 rounded-2xl px-6 py-8 w-[45%] bg-blue-500 '>
            <h2 className='font-semibold text-2xl'>{data.task_count.failed_task}</h2>
            <h3 className='font-semibold text-2xl'>Failed Task</h3>
        </div>
        
    </div>
    
  )
}

export default Numbers