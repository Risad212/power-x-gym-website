import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Classes.css';
import çlassImgeOne from '../../Media/class1.jpg';
import çlassImgeTow from '../../Media/class2.jpg';
import çlassImgeThree from '../../Media/class3.jpg';
import çlassImgeFour from '../../Media/class4.jpg';
import çlassImgeFive from '../../Media/class5.jpg';
import çlassImgeSix from '../../Media/class6.jpg';


const Classes = () => {
    const classObject = [
        {
            img: çlassImgeOne,
            title: 'phyco training'
        },
        {
            img: çlassImgeTow,
            title: 'phyco training'
        },
        {
            img: çlassImgeThree,
            title: 'phyco training'
        },
        {
            img: çlassImgeFour,
            title: 'phyco training'
        },
        {
            img: çlassImgeFive,
            title: 'phyco training'
        },
        {
            img: çlassImgeSix,
            title: 'phyco training'
        },
    ]
    return (
        <div className='class-container'>
            <Container>
                <Row>
                    {
                        classObject ?
                            classObject.map(element => {
                                return (
                                    <>
                                        <Col lg="4" style={{marginBottom: '5rem'}}>
                                            <div id="cardClass">
                                                <img src={element?.img} alt=""/>
                                                <div className='classInnerBox'>
                                                    <h3 className='d-inline me-3'>{element?.title}</h3><FontAwesomeIcon icon={faArrowRight} />
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

export default Classes;