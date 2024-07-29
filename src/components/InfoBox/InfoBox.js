import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const InfoBox = () => {

    return (
        <div className=' py-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            <InfoCard img={clock} title="Opening Hours" description='lorem ipsum solar' classess='bg-gradient-to-r from-primary to-secondary text-white p-5 text-center rounded'></InfoCard>
            <InfoCard img={marker} title="Visit Our Location" description='lorem ipsum solar' classess='bg-accent  text-white p-5 text-center rounded'></InfoCard>
            <InfoCard img={phone} title="Contact Us Now" description='lorem ipsum solar' classess='bg-gradient-to-r from-primary to-secondary text-white p-5 text-center rounded'></InfoCard>
            
        </div>
    );
};

export default InfoBox;