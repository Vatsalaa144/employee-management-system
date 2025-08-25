import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='p-4 text-gray-900 min-h-screen w-full bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100  sm:p-6 lg:p-10'>
            <div className='p-4 text-gray-900 max-w-7xl mx-auto space-y-8'>
                <Header changeUser={props.changeUser} />
                <Createtask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard