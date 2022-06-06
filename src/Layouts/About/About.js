import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../Media/about.jpg';
import './About.css';


const About = () => {
    return (
        <div className='about-container py-5'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="about-img">
                            <img src={aboutImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="about-content px-4 py-5">
                            <h2 className='pb-3'>we are here to dream <br /> <span>our team is here surve you</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem
                                quaerat ipsum distinctio, quasi dicta voluptates repellendus possimus
                                nulla natus mollitia earum suscipit doloribus, necessitatibus voluptatem.
                                Voluptatum tempora nisi, quas architecto doloremque rerum, soluta quasi nemo</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;