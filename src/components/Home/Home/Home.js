import React from 'react';
import Banner from '../Banner/Banner';
import Content from '../Content/Content';

const Home = () => {
    return (
        <div>
            <div className='lg:block hidden'>
                <Banner/>
            </div>
            <Content/>
        </div>
    );
};

export default Home;