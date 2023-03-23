import React from 'react'
import Logo from '../../Images/logo.png'

const Navbar = () => {

 
  return (
        <div className='flex justify-between items-center bg-white'>
        <div>
          <div>
            <img className="h-12 w-48" src={Logo} alt="logo" />
            <h1><small className="text-yellow-500">Because yellow is the happiest color.</small></h1>
          </div>
        </div>
        <div className=''>
          <h1 className='-mt-2'><small>08:12:09</small></h1>
          <h1 className='-mt-2 -ml-6'><small>Wed, 22 Mar, 2023</small></h1>
          <h1 className='-mt-2'><small>User Type</small></h1>
        </div>
      </div>
  )
}

export default Navbar
