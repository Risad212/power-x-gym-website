import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckOutForm.css';
import { Col, Container, Row } from 'react-bootstrap';
import AmexCardImage from '../../Media/credit-cards_amex.png';
import MasterCardImage from '../../Media/credit-cards_mastercard.png';
import VisaCardImage from '../../Media/credit-cards_visa.png';
import PayPalImage from '../../Media/Bitmap.png';

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
        <form onSubmit={handleSubmit}>
            <Container>
                <div className='border p-5 my-5'>
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
                        <div className='CardNumber py-3'>
                            <Col lg="12">
                                <CardElement />
                            </Col>
                        </div>
                    </Row>
                </div>
                <div className='border p-5'>
                    <Row>
                        <Col lg="8">
                            <div className='creaditCard d-flex'>
                                <input type="radio" />
                                <div>
                                    <h3>PayPal</h3>
                                    <p>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <img src={PayPalImage} className="me-2" alt="" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </form>
    );
};

export default CheckOutForm;