import React from 'react'
import logo from "../assets/NexaCode/logo.png";

function Logo( { }) {
  return (
        <div className="p-3">
        <img src={logo} alt="app logo" className='p-2 w-20'/>
        </div>
  )
}

export default Logo