import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarCom = () => {
    const [navstyle, setNavStyle] = useState(false)
    const changeNavbar = () => {
        if(window.scrollY > 80){
           setNavStyle(true)
        }
        else{
          setNavStyle(false)
        }
    }
    window.addEventListener('scroll', changeNavbar)

    
    return (
        <section className='navbar-container'>
            <Navbar expand="lg" fixed='top' style={{background: navstyle? '#fff': 'none', transition: 'all .5s ease'}}>
                <Container>
                    <Navbar.Brand href="#home"><h3 className='logo ps-3' style={{color: navstyle? '#000': '#fff'}}>Power <span style={{ color: '#ffdb42'}}>X</span></h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto py-4">
                            <Link to="/home" style={{color: navstyle? '#000': '#fff'}}>Home</Link>
                            <Link to="/services" style={{color: navstyle? '#000': '#fff'}}>services</Link>
                            <Link to="/clases" style={{color: navstyle? '#000': '#fff'}}>our classes</Link>
                            <Link to="/about" style={{color: navstyle? '#000': '#fff'}}>about us</Link>
                            <Link to="/blog" style={{color: navstyle? '#000': '#fff'}}>blog</Link>
                            <Link to="/price" style={{color: navstyle? '#000': '#fff'}}>pricing</Link>
                            <Link to="/contact" style={{color: navstyle? '#000': '#fff'}}>contact us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default NavbarCom;