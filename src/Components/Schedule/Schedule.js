import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Schedule.css';
import ScheduleBanner from '../../Media/class3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
const Schedule = () => {
    const timeData = [
        {
            day: 'Monday',
            time: '8:00AM - 9:00PM'
        },
        {
            day: 'Tuesday',
            time: '10:00AM - 11:00AM'
        },
        {
            day: 'Wednesday',
            time: '7:00AM - 8:00PM'
        },
        {
            day: 'Thrusday',
            time: '5:00AM - 6:00PM'
        },
        {
            day: 'Friday',
            time: '6:00AM - 7:00AM'
        },
        {
            day: 'Saturday',
            time: '7:00AM - 8:00PM'
        },
    ]
    return (
        <div className='scheduleContainer py-5'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="scheduleLeft">
                            <img src={ScheduleBanner} alt="" className='img-fluid' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quis aliquam dolorem sapiente nemo blanditiis officia odio?
                                Quidem assumenda perferendis amet distinctio, dolorum dignissimos
                                modi minima?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quis aliquam dolorem sapiente nemo blanditiis officia odio?
                                Quidem assumenda perferendis amet distinctio, dolorum dignissimos
                                modi minima?</p>
                            <ul className='mt-5'>
                                <li><FontAwesomeIcon icon={faCheckSquare} className="me-2" />Having Slimmer Shapely Thighs</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} className="me-2" />Getting stronger body</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} className="me-2" />increased metabolism</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} className="me-2" />increased muscular endurance</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} className="me-2" />maximum results in less time</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} className="me-2" />firm hips and tummy</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="scheduleRight ps-3">
                            <h2>class <span className='text-dark'>schedule</span></h2>
                            <Row className='mt-5'>
                                {
                                    timeData ?
                                        timeData.map(elem => {
                                            return (
                                                <>
                                                    <Col lg="6" className='mb-4'>
                                                        <div className="schedule-card">
                                                            <h4 className='fw-bold'>{elem?.day}</h4>
                                                            <p style={{ color: '#fcd842' }}>{elem?.time}</p>
                                                        </div>
                                                    </Col>
                                                </>
                                            )
                                        })
                                        :
                                        ''
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <button>Join Us</button>
        </div>
    );
};

export default Schedule;