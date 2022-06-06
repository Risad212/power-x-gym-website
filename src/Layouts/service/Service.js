import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceOne from '../../Media/service1.jpg';
import serviceTow from '../../Media/service2.jpg';
import servicethree from '../../Media/service3.jpg';
import icon1 from '../../Media/Group 80.png';
import icon2 from '../../Media/Group 81.png';
import icon3 from '../../Media/Group 82.png';
import './Service.css';

const Service = () => {
    const serviceInfo = [
        {
            bgImage: serviceOne,
            titleColor: '#fff',
            icon: icon1,
            title: 'Progression',
            disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitconsectetur adipisicing elit. SuscipitSuscipitconsecteturt'
        },
        {
            bgImage: serviceTow,
            titleColor: '#ffdb42',
            icon: icon2,
            title: 'workout',
            disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitconsectetur adipisicing elit. SuscipitSuscipitconsecteturt'
        },
        {
            bgImage: servicethree,
            color: '#fff',
            icon: icon3,
            title: 'nutrition',
            disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitconsectetur adipisicing elit. SuscipitSuscipitconsecteturt'
        },
    ]
    return (
        <div className='service-container py-5 my-5'>
            <Container>
                <Row>
                    {
                        serviceInfo.map(element => {
                            return (
                                <>
                                    <Col lg="4">
                                        <div className="single-service" style={{ backgroundImage: `url(${element?.bgImage})` }}>
                                            <div>
                                                <img src={element?.icon} alt="" />
                                                <h3 style={{color: element?.titleColor}}>{element?.title}</h3>
                                                <p className='px-3'>{element?.disc}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;