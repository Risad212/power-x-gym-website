import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Choose.css';
import chooseImageOne from '../../Media/choose1.png';
import chooseImageTow from '../../Media/choose2.png';
import chooseImageThree from '../../Media/choose3.png';


const Choose = () => {
    const chooseData = [
        {
            title: 'free fitness training',
            disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt animi dolores a sed labore fugit quas vitae eligendi',
            icon: chooseImageOne,
        },
        {
            title: 'tons of cardio & strength',
            disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt animi dolores a sed labore fugit quas vitae eligendi',
            icon: chooseImageTow,
        },
        {
            title: 'no commitment membership',
            disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt animi dolores a sed labore fugit quas vitae eligendi',
            icon: chooseImageThree,
        },
    ]
    return (
        <div className='choose-container py-5'>
            <Container>
                <h2 className='mb-5 text-center'>why <span className='text-dark'>choose us</span></h2>
                <Row className='pt-5'>
                    {
                        chooseData ?
                            chooseData.map(elem => {
                                return (
                                    <>
                                        <Col lg='4' md="6" sm="12">
                                            <div className="choose-card">
                                                <img src={elem?.icon} alt='icon' />
                                                <h3>{elem?.title}</h3>
                                                <p>{elem?.disc}</p>
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

export default Choose;