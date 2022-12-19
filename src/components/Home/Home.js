import React from 'react';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Provide from '../Provide/Provide';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Bio></Bio>
            <Provide></Provide>
        </div>
    );
};

export default Home;    