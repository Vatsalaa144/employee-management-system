import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskListCards = ({data}) => {
   
  return (
    <div className='p-4 text-gray-900 bg-white/50 backdrop-blur-sm border border-slate-200 shadow-xl rounded-2xl animate-fade-in'>
        <h2 className='p-4 text-2xl font-bold text-slate-800 mb-6'>Your Tasks</h2>
        
        <div 
            id='tasklistcards' 
            className='p-4 text-gray-900 h-96 overflow-x-auto overflow-y-hidden flex items-center justify-start gap-6 pb-4'
            style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(148, 163, 184, 0.3) transparent'
            }}
        >
            {data?.task?.length > 0 ? (
                data.task.map((elem, idx) => {
                    if(elem.active){
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if(elem.new_task){
                        return <NewTask key={idx} data={elem} />
                    }
                    if(elem.completed_task){
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if(elem.failed_task){
                        return <FailedTask key={idx} data={elem} />     
                    }
                    return null;
                })
            ) : (
                <div className='p-4 text-gray-900 flex-shrink-0 w-80 h-full bg-gradient-to-br from-slate-50 to-stone-100 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-center'>
                    <div className='p-4 text-gray-900 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4'>
                        <span className='p-4 text-2xl text-slate-400'>📋</span>
                    </div>
                    <h3 className='p-4 text-lg font-semibold text-slate-600 mb-2'>No Tasks Yet</h3>
                    <p className='p-4 text-sm text-slate-500'>Your tasks will appear here once assigned.</p>
                </div>
            )}
        </div>
        
        {data?.task?.length > 3 && (
            <div className='p-4 text-gray-900 mt-4 text-center'>
                <span className='p-4 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200'>
                    Scroll horizontally to view all tasks →
                </span>
            </div>
        )}
    </div>
  )
}

export default TaskListCards