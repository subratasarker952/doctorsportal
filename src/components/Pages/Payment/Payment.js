import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51MNI4MDP1LZtQxxMnhTHVKUgCw0c1YkVZzFWGPx03OtoiJj0F6qzPUr2KeRuPynEnsVOTG3XUC8AodPyUlwG9RVR00qYMwibl3');

const Payment = () => {
    const CLIENT_SECRET="sk_test_51MNI4MDP1LZtQxxMYTdBRd4VIl1qDTyGqNKYbmud1E0vqYrrUD7cx17DDkZIuy3NLqZbFwbqXEb1WH55ZaLLEUCj00uvGuz2n4"
    const options = {
        // passing the client secret obtained from the server
        clientSecret: `{${CLIENT_SECRET}}`,
      };

    return ( 
        <div>
            <h1>Payment page</h1>
            <div className="card"></div>
            <div className="card">
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;