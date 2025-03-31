import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser","")
    props.changeUser("")
    /* window.location.reload() */
  }
  return (
    <div className=' flex items-center justify-between'>
        <h1 className='text-3xl font-semibold text-white'>Hello, <br /> <span className='text-5xl text-white'>  {/* {props.data.firstname} */} People👋</span></h1>
        <button onClick={logOutUser} className='text-sm font-semibold bg-amber-700 rounded px-1.5 py-2'>Log Out</button>
    </div>
  )
}

export default Header