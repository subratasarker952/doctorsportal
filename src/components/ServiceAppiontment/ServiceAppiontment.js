import React from 'react';

const ServiceAppiontment = ({ service, setTreatment }) => {
    const { name, available } = service
    return (
        <div className="card w-max-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-primary font-bold text-2xl">{name}</h2>
               <p>{available.length? <span>{available[0]}</span>: <span>No Slot Available</span>}</p>
               <p>{available.length} Slot Available</p>
                <div className="card-actions justify-center">
               

                    <label
                    htmlFor="BookingModal" disabled={available.length===0} className="btn btn-primary" onClick={()=>setTreatment(service)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceAppiontment;


