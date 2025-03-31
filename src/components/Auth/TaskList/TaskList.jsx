import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto  flex items-center justify-start gap-5 mt-10 w-[100%] flex-nowrap'>
     { data.task.map((elem , idx) => {
      if(elem.active){
          return <AcceptTask key={idx}  data = {elem}/>
      }
      if(elem.new_task){
          return <NewTask key={idx}  data = {elem} />
      }
      if(elem.completed_task){
          return <CompleteTask key={idx}  data = {elem} />
      }
      if(elem.failed_task){
          return <FailedTask key={idx}  data = {elem} />
      }
    })}
      
</div>
  )
}

export default TaskList