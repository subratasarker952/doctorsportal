import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {

    return (
        <div>
            <div className="hero min-h-full  justify-space-between">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className=''>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;