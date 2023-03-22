import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav/BottomNav';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0'>
            <Navbar/>
            </div>
            <Outlet/>
            <div className='fixed bottom-0 w-full'>
               <BottomNav/>
            </div>
        </div>
    );
};

export default Main;