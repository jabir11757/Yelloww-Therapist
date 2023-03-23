import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiAcademicCap, HiChevronDown, HiChevronUp, HiOutlineArrowRightOnRectangle, HiOutlineDocument, HiOutlineQuestionMarkCircle, HiOutlineSun, HiUserPlus, HiUsers } from "react-icons/hi2";
import Footer from '../Footer/Footer';

const BottomNav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [footer, setFooter] = useState(false);
  
    const fixFooter =()=>{
      if(window.scrollY <= 1390){
        setFooter(true)
      }
      else{
        setFooter(false)
      }
    }
    window.addEventListener("scroll",fixFooter)

    const handleOpenMenu=()=>{
        setOpenMenu(true)
    }
    const handleCloseMenu=()=>{
        setOpenMenu(false)
    }

    return (
        <div>
            {
                footer ?
                <div className='text-center bg-white'>
                    <div>
                        <ul className='flex justify-center py-2'>
                            <li className='flex flex-col justify-center items-center mx-12'>
                                <div><HiUsers className='h-5 w-5 text-yellow-500'/></div>
                                <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Therapists</small></Link></h1>
                            </li>
                            <li className='flex flex-col justify-center items-center mx-12'>
                                <div><HiOutlineArrowRightOnRectangle className='h-5 w-5 text-yellow-500'/></div>
                                <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Login</small></Link></h1>
                            </li>
                            <li className='flex flex-col justify-center items-center mx-12'>
                                <div><HiUserPlus className='h-5 w-5 text-yellow-500'/></div>
                                <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Signup</small></Link></h1>
                            </li>
                            {
                                openMenu ? 
                                <li onClick={handleCloseMenu} className='flex flex-col justify-center items-center mx-12'>
                                    <div><HiChevronDown className='h-5 w-5 text-yellow-500'/></div>
                                    <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Hide Menu</small></Link></h1>
                                </li>
                                :
                                <li onClick={handleOpenMenu} className='flex flex-col justify-center items-center mx-12'>
                                <div><HiChevronUp className='h-5 w-5 text-yellow-500'/></div>
                                <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Full Menu</small></Link></h1>
                                </li>
                            }
                        </ul>

                        {
                            openMenu && 
                            <ul className='flex justify-center mt-4'>
                                    <li  className='flex flex-col justify-center items-center mx-12'>
                                        <div><HiOutlineSun className='h-5 w-5 text-yellow-500'/></div>
                                        <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>About TYT</small></Link></h1>
                                    </li>
                                    <li  className='flex flex-col justify-center items-center mx-12'>
                                        <div><HiAcademicCap className='h-5 w-5 text-yellow-500'/></div>
                                        <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>TYTFS</small></Link></h1>
                                    </li>
                                    <li  className='flex flex-col justify-center items-center mx-12'>
                                        <div><HiOutlineQuestionMarkCircle className='h-5 w-5 text-yellow-500'/></div>
                                        <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Contact</small></Link></h1>
                                    </li>
                                    <li  className='flex flex-col justify-center items-center mx-12'>
                                        <div><HiOutlineDocument className='h-5 w-5 text-yellow-500'/></div>
                                        <h1 className='text-yellow-500 font-semibold'><Link to='/'><small>Term & Conditions</small></Link></h1>
                                    </li>
                                </ul>
                        }
                    </div>
                </div> 
                :
                <div>
                    <Footer/>
                </div>
            }
        </div>
    );
};

export default BottomNav;