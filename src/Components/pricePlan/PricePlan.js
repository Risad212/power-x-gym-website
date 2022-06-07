import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PricePlan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import priceOne from '../../Media/service1.jpg';
import priceTow from '../../Media/service2.jpg';
import priceThree from '../../Media/service3.jpg';
import { useNavigate } from 'react-router-dom';

const PricePlan = () => {
    const priceData = [
        {
            price: '140',
            plane: 'advanced plan',
            bgImage: priceOne,
        },
        {
            price: '120',
            plane: 'Basic plan',
            bgImage: priceTow,
        },
        {
            price: '90',
            plane: 'begainer plan',
            bgImage: priceThree,
        },
    ]

    const navigate = useNavigate()
    return (
        <div className='pricePlanContainer py-5'>
            <Container>
                <div className="priceHead text-center py-3">
                    <h2>choose the offer <span className='text-dark'>that suits you</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit mollitia, recusandae at minima culpa.</p>
                </div>
                <Row className='my-5'>
                    {
                        priceData ?
                            priceData.map((elem) => {
                                return (
                                    <>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="priceCard" style={{background: `url(${elem?.bgImage})`, backgroundSize: 'cover'}}>
                                                <div>
                                                    <span>billed monthly</span>
                                                    <h2>{elem?.plane}</h2>
                                                    <h1>{`$${elem?.price}`}</h1>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faCheck} className="me-2" />mobile optimized</li>
                                                        <li><FontAwesomeIcon icon={faCheck} className="me-2" />best hosting</li>
                                                        <li><FontAwesomeIcon icon={faCheck} className="me-2" />free custom</li>
                                                        <li><FontAwesomeIcon icon={faCheck} className="me-2" />outstanding</li>
                                                        <li><FontAwesomeIcon icon={faCheck} className="me-2" />happy customer</li>
                                                    </ul>
                                                    <button onClick={() => navigate('/membership')}>purchase</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                            :
                            ''
                    }
                </Row>
            </Container >
        </div>
    );
};

export default PricePlan;