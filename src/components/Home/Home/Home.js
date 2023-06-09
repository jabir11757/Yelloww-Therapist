import React from 'react';
import About from '../../About/About';
import Payment from '../../Payment/Payment';
import Question from '../../Question/Question';
import Banner from '../Banner/Banner';
import Content from '../Content/Content';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='lg:block hidden'>
                <Banner />
            </div>
            <Content />
            <Services />
            <Payment />
            <About />
            <Question />
        </div>
    );
};

export default Home;