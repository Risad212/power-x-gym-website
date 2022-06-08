import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Container, Row } from 'react-bootstrap';


const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)

console.log(process.env.STRIPE_CLIENT_KEY)
const PaymentCard = () => {
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: {},
    //   };
    return (
        <div>
            <Container>
                {/* <Elements stripe={stripePromise} options={options}>
                    <form>
                        <PaymentElement />
                        <button>Submit</button>
                    </form>
                </Elements> */}
            </Container>
        </div>
    );
};

export default PaymentCard;



// pk_test_51KchMQHOoLp8HmpyJaiWowfpzFuDwabyl2x0Yhv9ihG8cnDwF6I9xwPbc1d1pUAa3TliVZyce7sNMdlfVFIrpF4d00jKvpRO85