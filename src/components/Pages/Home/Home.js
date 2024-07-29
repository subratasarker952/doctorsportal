import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Banner from '../../Banner/Banner';
import InfoBox from '../../InfoBox/InfoBox';
import Services from '../../Services/Services';
import Testomonials from '../../Testomonials/Testomonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoBox></InfoBox>
            <Services></Services>
            <Appointment></Appointment>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;