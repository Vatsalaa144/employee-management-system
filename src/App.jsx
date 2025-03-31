import React, { useContext, useEffect, useState } from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import {  setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/Authprovider'

const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [UserData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
     if(loggedInUser){
        const UserData = JSON.parse(loggedInUser)
        setUser(UserData.role)
        setLoggedInUserData(UserData.data)
      }
}, [])
  
  
    const handleLogin = (email , password) => {
      if(email == "admin@me.com" && password == "123"){
        setUser("admin")
       localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
      }else if(UserData ){
      const employee = UserData.find((e)=>email == e.email && password == e.password)
      
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee" , data : employee}))
      }
        
        
      }else{
        alert("Invalid Credentials")
      }

    }


  useEffect(() => {
    setLocalStorage()
   
    
}, []);
  
  return (
    <>
   {!user ? <Login handleLogin = {handleLogin} /> : ""}
  {user == "admin" ?  <AdminDashboard changeUser = {setUser} /> : (user == "employee"?<EmployeeDashboard changeUser = {setUser} data = {LoggedInUserData} /> : null) }
 
   
    </>
  )
}

export default App
