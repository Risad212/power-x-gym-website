import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row>
                    <Col lg={6} sm="auto">
                        <div className="banner-content">
                            <h2>The Best Fitentss Studio in Town</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Suscipit quae repellendus et accusamus. Suscipit amet sunt atque,
                                velit, facere natus a repellendus saepe ipsum magni veritatis impedit esse</p>
                            <button><Link to='/'>join us</Link></button>
                        </div>
                    </Col>
                    <Col lg={6} md="auto">
                        <div className="banner-button">
                            <span><FontAwesomeIcon icon={faPlay} /></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;