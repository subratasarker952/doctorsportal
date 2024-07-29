import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from '../../BookingModal/BookingModal';
import Loding from '../../Loding/Loding';
import ServiceAppiontment from '../../ServiceAppiontment/ServiceAppiontment';


const AvilableAppointment = ({date}) => {
    // const [services, setServices]=useState([])
    const [treatment, setTreatment]=useState(null)
    const formatedDate= format(date, 'PP')
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res=> res.json())
    //     .then(data=> setServices(data) )
    // },[formatedDate])

    // const { isLoading, error, data } = useQuery ('repoData', () =>
    // fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
    //   res.json()
    // )

const {isLoading, data:services, refetch, error }=useQuery(['available', formatedDate], ()=> fetch(`http://localhost:5000/available?date=${formatedDate}`)
    .then(res=> res.json())
)

    if(isLoading){
       return <Loding/>
    }

    let dataLoadingError
    if(error){
     dataLoadingError= <p>Fail to load data</p>
    }


    return (
        <div>
             <h2 className='py-[50px] text-center text-primary font-bold text-2xl'>{date? `Avilable Appiontment on ${format(date, 'PP')}`: 'You have no selected date '}</h2>
             <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4'>

             {services?.map(service=> <ServiceAppiontment key={service._id} 
             setTreatment={setTreatment}
             service={service}></ServiceAppiontment>)}
            
             </div>
             {treatment && <BookingModal 
             date={date} 
             treatment={treatment}
             setTreatment={setTreatment}
             refetch={refetch}
             
             ></BookingModal>}
            <h2 className='text-center text-3xl text-red-500'>{dataLoadingError}</h2>

        </div>
    );
};

export default AvilableAppointment;