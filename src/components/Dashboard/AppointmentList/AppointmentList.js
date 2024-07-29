import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../Loding/Loding';

const AppointmentList = () => {
    const navigate= useNavigate()
    const [user, loading] = useAuthState(auth)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?email=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log(res)
                    if(res.status===401 || res.status===403){
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate("/")
                    }
                    return res.json()})
                .then(data => setBookings(data))
        }
    })

    if (loading) {
        return <Loding />
    }
    return (
        <div >
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index)=> <tr key={booking._id}>
                            <th>{index+1}</th>
                            <th>{booking.name}</th>
                            <td>{booking.service }</td>
                            <td>{booking.date}</td>
                            <td>{booking.slot}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AppointmentList;