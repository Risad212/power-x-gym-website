import React from 'react';
import NavbarCom from '../Components/Navbar/Navbar';
import About from '../Layouts/About/About';
import Banner from '../Layouts/Banner/Banner';
import Choose from '../Layouts/choose/Choose';
import Footer from '../Layouts/Footer/Footer';
import Service from '../Layouts/service/Service';
import Trainin from '../Layouts/Training/Trainin';


const HomePage = () => {
    return (
        <div>
            <NavbarCom />
            <Banner page="home"/>
            <Service />
            <About />
            <Trainin />
            <Choose />
            <Footer />
        </div>
    );
};

export default HomePage;