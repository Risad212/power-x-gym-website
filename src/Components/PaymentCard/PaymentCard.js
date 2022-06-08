import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Container} from 'react-bootstrap';
import CheckOutForm from '../CheckOutForm/CheckOutForm';


const stripePromise = loadStripe("pk_test_51KchMQHOoLp8HmpyJaiWowfpzFuDwabyl2x0Yhv9ihG8cnDwF6I9xwPbc1d1pUAa3TliVZyce7sNMdlfVFIrpF4d00jKvpRO85")

const PaymentCard = () => {
    return (
        <div>
            <Container>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </Container>
        </div>
    );
};

export default PaymentCard;

