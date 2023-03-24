import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import picchi from '../../Images/picchi.gif'

const Question = () => {
    const [isClick_1, setIsClick_1] = useState(false);
    const [isClick_2, setIsClick_2] = useState(false);
    const [isClick_3, setIsClick_3] = useState(false);

    const handleClickOpen_1 = () => {
        setIsClick_1(true)
    }
    const handleClickClose_1 = () => {
        setIsClick_1(false)
    }
    const handleClickOpen_2 = () => {
        setIsClick_2(true)
    }
    const handleClickClose_2 = () => {
        setIsClick_2(false)
    }
    const handleClickOpen_3 = () => {
        setIsClick_3(true)
    }
    const handleClickClose_3 = () => {
        setIsClick_3(false)
    }

    return (
        <div className='my-16 mb-48'>
            <h1 className='text-2xl text-yellow-500 font-semibold'>Questions maybe circling in your mind:</h1>
            <div className='ml-10'>

                <ul className='flex flex-col'>
                    {
                        isClick_1 ?
                            <Link onClick={handleClickClose_1} className='underline text-slate-500 my-3'><small>* Yellow therapist reminds me of yellow journalists, why yellow?</small></Link>
                            :
                            <Link onClick={handleClickOpen_1} className='underline text-slate-500 my-3'><small>* Yellow therapist reminds me of yellow journalists, why yellow?</small></Link>
                    }
                    <p className={isClick_1 ? 'visible text-slate-500' : 'hidden'}>
                        <small>
                            As you could guess, we get that a lot. But we chose yellow because yellow is famously the happiest color, yellow is the symbol of happiness.
                            So the therapists work here are yellow therapists in the best possible way, far from yellow journalists. So, no worries. Let's spread happiness.
                        </small>
                    </p>

                    {
                        isClick_2 ?
                            <Link onClick={handleClickClose_2} className='underline text-slate-500 my-2'><small>* This web design makes me sad, why is it so dull? Or, I don't like the design. Or, did you not pay your web designer?</small></Link>
                            :
                            <Link onClick={handleClickOpen_2} className='underline text-slate-500 my-2'><small>* This web design makes me sad, why is it so dull? Or, I don't like the design. Or, did you not pay your web designer?</small></Link>
                    }
                    <p className={isClick_2 ? 'visible text-slate-500' : 'hidden'}>
                        <small>
                            We are really sorry that you felt that way. But to assure you, this is not our final design. We tend to bring the platform to the public as fast as possible, so we had no choice but to find perfection in the imperfect, just for now.
                            And we are working relentlessly to make the platform better and better. Thanks for being with us.
                        </small>
                    </p>
                    {
                        isClick_3 ?
                            <Link onClick={handleClickClose_3} className='underline text-slate-500 my-2'><small>* Wait a minute, who are you people?</small></Link>
                            :
                            <Link onClick={handleClickOpen_3} className='underline text-slate-500 my-2'><small>* Wait a minute, who are you people?</small></Link>
                    }
                    <div className={isClick_3 ? 'visible mt-2' : 'hidden'}>
                        <img src={picchi} alt='' />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Question;