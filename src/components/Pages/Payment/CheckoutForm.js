import { PaymentElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <PaymentElement/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default CheckoutForm;