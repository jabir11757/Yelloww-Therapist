import React from 'react';
import payment from '../../Images/FOOTER.png'

const Payment = () => {
    return (
        <div className='my-16 divide-y-2 divide-y-reverse'>
            <h1 className='text-slate-500 text-center font-bold mb-4'>Secure and easy payment with wide range of checkout choices</h1>
            <div className='mb-4'>
                <img src={payment} alt='payment' />
            </div>
        </div>
    );
};

export default Payment;