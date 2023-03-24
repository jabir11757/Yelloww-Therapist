import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav/BottomNav';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0'>
                <Navbar />
            </div>
            <Outlet />
            <div className='sticky bottom-0 w-full'>
                <BottomNav />
            </div>
            <div className='sticky bottom-0'>
                <div className='flex justify-end'>
                    <div className='flex flex-col -mt-44 -mr-20'>
                        <button className='my-3 h-10 w-24 text-yellow-500 font-semibold outline outline-slate-200 rounded-3xl shadow-xl'>RUMUNA</button>
                        <button className='my-3 h-10 w-24 text-yellow-500 font-semibold outline outline-slate-200 hover:bg-yellow-500 hover:text-white rounded-3xl shadow-xl'>TYT Vent</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;