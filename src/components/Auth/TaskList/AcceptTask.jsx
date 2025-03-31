import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-amber-500'>
    <div className='flex  items-center justify-between'>
    <h2 className='bg-amber-800 text-sm   rounded px-4 py-2'>{data.category}</h2>
    <h3>{data.date}</h3>
    </div>
    <h1 className='flex items-center justify-center mt-5 font-bold text-2xl'>{data.title}</h1>
    <p className='mt-5 font-semibold flex justify-between items-center'>{data.description}</p>
    <div className='flex justify-between mt-4'>
        <button className='rounded bg-amber-600 py-1 px-2 text-sm'>Completed</button>
        <button className='rounded bg-amber-800 py-1 px-2 text-sm'>Failed</button>
    </div>
</div>
  )
}

export default AcceptTask