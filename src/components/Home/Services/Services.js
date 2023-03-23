import React from 'react';
import content_1 from '../../../Images/content_1.png'
import content_2 from '../../../Images/content_2.gif'
import content_3 from '../../../Images/content_3.png'

const Services = () => {

    const serviceData = [
        {
            image: content_1,
            title : "A bridge between ...",
            discription: "A platform serving both of who seeks professional help for their mental well being and the professional therapists who are always ready to help. We're providing a smooth bridge between these two."
        },
        {
            image: content_2,
            title : "A bridge between ...",
            discription: "A platform serving both of who seeks professional help for their mental well being and the professional therapists who are always ready to help. We're providing a smooth bridge between these two."
        },
        {
            image: content_3,
            title : "A bridge between ...",
            discription: "A platform serving both of who seeks professional help for their mental well being and the professional therapists who are always ready to help. We're providing a smooth bridge between these two."
        },
    ]
    return (
        <div className='w-2/3 mx-auto my-24'>
            {
                serviceData.map(services=> 
                    <div className='flex my-12 even:flex-row-reverse'>
                        <div className='flex w-1/2 justify-center'>
                            <img className='h-52 w-64' src={services.image} alt=''/>
                        </div>
                        <div className='flex w-1/2 items-center'>
                            <div className=''>
                                <h1 className='text-yellow-500 font-bold text-xl'>{services.title}</h1>
                                <p className='font-semibold text-slate-500 mt-3'>
                                    <small>{services.discription}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    );
};

export default Services;