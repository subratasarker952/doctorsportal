import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loding from '../Loding/Loding';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loding />
    }
    const { _id, name, slots } = treatment;
    const handleSubmit = (e) => {
        e.preventDefault();
        const BookingSlot = {
            treatmentId: _id,
            service: treatment.name,
            date: e.target.date.value,
            slot: e.target.slot.value,
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phoneNumber.value
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            body: JSON.stringify(BookingSlot),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.success){
                    toast(`Appointment is set ${BookingSlot.date} at ${BookingSlot.slot}`)
                }
                else{
                    toast(`You already have an appointment in ${data.booking.date} at ${data.booking.slot}`)
                }
                
                e.target.reset()  
                refetch()
                setTreatment(null)
                
            });
            
            

    }
    return (
        <div>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-center text-primary text-2xl'>{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='date' value={format(date, 'PP')} readOnly className="input w-full input-bordered mt-3" />

                        <select name='slot' className="mt-3 text-xl select select-bordered mx-auto w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text"
                            disabled
                            value={user?.displayName || null}
                            name='name'
                            className="input w-full input-bordered mt-3" required />

                        <input
                            readOnly
                            value={user?.email || null}
                            name='email'
                            placeholder="Email" className="input w-full input-bordered mt-3 " required />

                        <input type="text"
                            name='phoneNumber' placeholder="Phone Number" className="input w-full input-bordered mt-3" required />

                        <input type="submit"
                            value="Book Appointment"
                            className="input w-full input-bordered mt-3 btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;