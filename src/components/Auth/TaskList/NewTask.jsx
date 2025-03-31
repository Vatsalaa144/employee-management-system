import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-pink-500 '>
        <div className='flex  items-center justify-between'>
             <h2 className='bg-pink-800 text-sm   rounded px-3 py-1'>{data.category}</h2>
             <h3>{data.date}</h3>
             </div>
             <h1 className='flex items-center justify-center mt-5 font-bold text-2xl'>{data.title}</h1>
             <p className='mt-5 font-semibold flex justify-between items-center'>{data.description}</p>
             <div className='mt-4'>
             <button className='rounded bg-pink-800 py-1 px-2 text-sm'>Accept Task</button>
             
             </div>
        </div>
             
       
  )
}

export default NewTask