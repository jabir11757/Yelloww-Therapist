import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center my-6'>
            <div>
                <div className='flex justify-center'>
                    <p className='text-slate-400'><small>The Yellow Therapist |</small></p>
                    <p className='text-slate-400 ml-1'><small>All rights reserved</small></p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-slate-400'><small>Terms and Conditions | </small></p>
                    <p className='text-slate-400 ml-1'><small> Privacy Policy | </small></p>
                    <p className='text-slate-400 ml-1'><small> Contact us</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;