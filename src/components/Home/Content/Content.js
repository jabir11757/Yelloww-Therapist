import React from 'react';

const Content = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-xl text-center text-gray-500 font-semibold my-6'>What are you looking for ?</h1>
                <div className='flex'>
                    <button className='h-10 w-36 outline outline-yellow-400 font-semibold hover:bg-yellow-400 text-yellow-400 hover:text-white rounded-lg'><small>I need a therapist</small></button>
                    <p className='flex items-center font-semibold mx-6'> <small>or,</small> </p>
                    <button className='h-10 w-36 outline outline-yellow-400 font-semibold bg-yellow-400 hover:bg-white text-white hover:text-yellow-400 rounded-lg'><small>I am a therapist</small></button>
                </div>
            </div>
        </div>
    );
};

export default Content;