import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Allother from '../other/Allother'

const AdminDashboard = (props) => {
  return (
    <div className=' h-screen w-full p-10'>
        <Header changeUser = {props.changeUser}/>
       <CreateTask/>
       <Allother/>
    </div>
  )
}

export default AdminDashboard