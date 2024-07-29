import React from 'react';
import Doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }}  className='flex justify-center items-center my-[200px]'>
        <div  className='flex-1 '>
            <img  className='mt-[-100px]' src={Doctor} alt="" />
        </div>
        <div  className='flex-1 text-white'>
            <h2  className='font-bold text-primary'>Appointment</h2>
            <h2  className='text-3xl py-5 font-bold'>Make An Appointment To Day</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil adipisci, minus ducimus, in aspernatur saepe architecto deserunt rem voluptates cum! Amet, nostrum perspiciatis! Explicabo nam totam, ratione nesciunt nulla rerum ipsa debitis officia voluptatum sed? Odio dolores minus debitis.</p>
            
        </div>
        </section>
    );
};

export default Appointment;