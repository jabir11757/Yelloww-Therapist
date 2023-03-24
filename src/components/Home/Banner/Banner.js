import React from 'react';
import students from '../../../Images/student.png'
import everyone from '../../../Images/everyone.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 border border-yellow-400 divide-x-4 divide-gray-500 bg-[#f8f5f0] my-8'>
            <div className='flex justify-center'>
                <div>
                    <div className='flex justify-center mt-2'>
                        <img className='h-28 w-32' src={students} alt='students' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-semibold text-slate-600 text-center'>TYT for Students</h1>
                        <h1 className='text-4xl text-yellow-400 font-semibold text-center mt-6'>Get Up to 50% OFF!</h1>
                        <h1 className='text-yellow-400 font-semibold mt-4 mb-12'>Are you a member of our partner student club?</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div className='flex justify-center mt-2'>
                        <img className='h-28 w-32' src={everyone} alt='everyone' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-semibold text-slate-600 text-center'>TYT for Everyone</h1>
                        <h1 className='text-4xl text-yellow-400 font-semibold text-center mt-6'>Get 20% OFF!</h1>
                        <h1 className='text-yellow-400 font-semibold mt-4 mb-12'>Get your first session with us</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;