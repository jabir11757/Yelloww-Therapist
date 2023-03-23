import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center mt-24'>
            <div>
                <div className='flex justify-center'>
                    <p className='text-slate-500'><small>The Yellow Therapist |</small></p>
                    <p className='text-slate-500 ml-1'><small>All rights reserved</small></p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-slate-500'><small>Terms and Conditions | </small></p>
                    <p className='text-slate-500 ml-1'><small> Privacy Policy | </small></p>
                    <p className='text-slate-500 ml-1'><small> Contact us</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;