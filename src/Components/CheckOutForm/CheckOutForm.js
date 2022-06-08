import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckOutForm.css';
import { Col, Row } from 'react-bootstrap';
import AmexCardImage from '../../Media/credit-cards_amex.png';
import MasterCardImage from '../../Media/credit-cards_mastercard.png';
import VisaCardImage from '../../Media/credit-cards_visa.png';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };
    return (
        <div className='border p-5'>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg="8">
                        <div className='creaditCard d-flex'>
                            <input type="radio" />
                            <div>
                                <h3>Credit Card</h3>
                                <p>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <img src={AmexCardImage} className="me-2" alt="" />
                        <img src={MasterCardImage} className="me-2" alt="" />
                        <img src={VisaCardImage} className="me-2" alt="" />
                    </Col>
                </Row>
                <Row>
                    <div>
                        <CardElement />
                    </div>
                </Row>
            </form>
        </div>
    );
};

export default CheckOutForm;