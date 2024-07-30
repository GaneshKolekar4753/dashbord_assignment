import React from 'react'
import paymengIcon from "../assets/Vector.svg";
import assignmentIcon from "../assets/Assignments.svg";


const SidebarList1 = () => {
  return (
    <div className='sideBarList'>
        <div className='items'>
          <img src={paymengIcon} alt="profile img" />
          <p>Summary </p>
        </div>
        <div className='items'>
          <img src={assignmentIcon} alt="profile img" />
          <p>Summary </p>
        </div>
    </div>
  )
}

export default SidebarList1;