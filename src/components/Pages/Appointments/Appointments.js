import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvilableAppointment from '../AvilableAppointment/AvilableAppointment';



const Appointments = () => {

  const [date, setDate] = useState(new Date())

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvilableAppointment date={date}></AvilableAppointment>
    </div>
  );
};

export default Appointments;