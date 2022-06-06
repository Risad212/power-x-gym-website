import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import trainingOne from '../../Media/training1.png';
import trainingTow from '../../Media/training2.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Training.css'

const Trainin = () => {
    const titleStyle = {
        fontSize: '2.5rem',
        color: '#ffdb42',
        textTransform: 'uppercase',
        fontWeidth: '800',
        fontFamily: `Oswald, 'sans-serif'`,
        textAlign: 'center',
        display: 'block'
    }

    const traingData = [
        {
            title: 'Yoga Training Session',
            bgImage: trainingOne,
        },
        {
            title: 'cardio Training Session',
            bgImage: trainingTow,
        },
    ]
    return (
        <div className='training-container py-5'>
            <Container>
                <h2 style={titleStyle}>Training <span className='text-dark pb-5'>programs</span></h2>
                <Row className='mt-5'>
                    {
                        traingData ?
                            traingData.map(elem => {
                                return (
                                    <>
                                        <Col lg="6" md='12'>
                                            <div id="training" style={{backgroundImage: `url(${elem.bgImage})`}}>
                                                <div className='innerBox'>
                                                    <h3 className='d-inline me-2'>{elem?.title}</h3><FontAwesomeIcon icon={faArrowRight} />
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
            </Container>
        </div>
    );
};

export default Trainin;