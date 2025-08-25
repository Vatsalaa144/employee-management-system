import React, { useContext, useEffect, useState } from 'react'
import LogIn from './auth/LogIn'
import EmployeeDashboard from './dashboard/EmployeeDashboard'
import AdminDashboard from './dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setuser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInuser = localStorage.getItem('loggedInUser')

    if (loggedInuser) {
      const userData = JSON.parse(loggedInuser)
      setuser(userData.role)
      setloggedInUserData(userData.data)

    }

  }, [])


  
  const handleLogIn = (email, password) => {
    if (email == 'admin@gmail.com' && password == '12345') {
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)

      if (employee) {
        setuser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }

    }
    else {
      alert('Invalid Credentials')
    }
  }



  useEffect(() => {
    setLocalStorage()

  }, [])

  return (
    <>
      {!user ? < LogIn handleLogIn={handleLogIn} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser = {setuser} /> : (user == 'employee' ? <EmployeeDashboard  changeUser = {setuser} data = {loggedInUserData} /> : null)}
    </>
  )
}

export default App