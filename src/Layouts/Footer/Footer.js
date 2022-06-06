import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { faYoutube, faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
           <Container>
               <Row>
                 <Col lg="4" md="4" sm="12" className='mb-3'>
                    <div className="footer-logo">
                        <h3>power <span style={{color: '#ffdb42'}}>x</span></h3>
                    </div>
                 </Col>
                 <Col lg="2" md="4" sm="12" className='mb-3'>
                    <div className="social-link">
                        <h5>Need Help?</h5>
                         <ul>
                             <li>Help center</li>
                             <li>Email Support</li>
                             <li>Live Chat</li>
                             <li>gift Certificates</li>
                             <li>Send us Feedback</li>
                         </ul>
                    </div>
                 </Col>
                 <Col lg="2" md="4" sm="12" className='mb-3'>
                    <div className="social-link">
                        <h5>digital recources</h5>
                         <ul>
                             <li>articles</li>
                             <li>E-books</li>
                         </ul>
                    </div>
                 </Col>
                 <Col lg="2" md="4" sm="12" className='mb-3'>
                   <h5>connect with us</h5>
                    <div className="social-icon">
                        <ul className='d-flex'>
                            <li><FontAwesomeIcon icon={faYoutube}/></li>
                            <li><FontAwesomeIcon icon={faFacebookF}/></li>
                            <li><FontAwesomeIcon icon={faInstagram}/></li>
                            <li><FontAwesomeIcon icon={faTwitter}/></li>
                            <li><FontAwesomeIcon icon={faWhatsapp}/></li>
                        </ul>
                        <span>Forum</span>
                    </div>
                 </Col>
                 <Col lg="2" md="4" sm="12" className='mb-3'>
                   <h5>join our newsletter</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!consectetur adipisicing elit.!</p>
                 </Col>
               </Row>
               <span className='d-block text-center py-5' style={{color: '#777'}}>2022 programming hero allRight Reversev</span>
           </Container>
        </footer>
    );
};

export default Footer;