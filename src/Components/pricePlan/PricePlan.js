import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PricePlan.css';
import priceOne from '../../Media/service1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PricePlan = () => {
    return (
        <div className='pricePlanContainer py-5'>
            <Container>
                <div className="priceHead text-center py-5">
                    <h2>choose the offer <span className='text-dark'>that suits you</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit mollitia, recusandae at minima culpa.</p>
                </div>
                <Row>
                    <Col lg="4">
                        <div className="priceCard" style={{ background: `url(${priceOne})` }}>
                            <div>
                                <span>billed monthly</span>
                                <h2>advanced plan</h2>
                                <h1>$140</h1>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>mobile optimized</li>
                                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>best hosting</li>
                                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>free custom</li>
                                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>outstanding</li>
                                    <li><FontAwesomeIcon icon={faCheck} className="me-2"/>happy customer</li>
                                </ul>
                                <button>purchase</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default PricePlan;