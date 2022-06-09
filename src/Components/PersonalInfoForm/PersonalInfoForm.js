import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PersonalInfoForm.css';


const PersonalInfoForm = () => {
    const navigate = useNavigate()
    return (
        <div className='personalInfoFormContainer'>
            <Container>
                <Form className='my-5'>
                    <Row>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="password" placeholder="Mobile" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Birth & Date</Form.Label>
                                <Form.Control type="date" placeholder="" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select aria-label="Default select example" required>
                                    <option>select your gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">female</option>
                                    <option value="3">other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address line 1:</Form.Label>
                                <Form.Control type="text" placeholder="address" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Country/Region</Form.Label>
                                <Form.Control type="text" placeholder="country/region" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>City:</Form.Label>
                                <Form.Control type="text" placeholder="City" required/>
                            </Form.Group>
                        </Col>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Post code:</Form.Label>
                                <Form.Control type="text" placeholder="post code" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
               <button className='d-block ms-auto' onClick={() => navigate('/payment')}>Next</button>
            </Container>
        </div>
    );
};

export default PersonalInfoForm;