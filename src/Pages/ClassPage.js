import React from 'react';
import BannerForAll from '../Components/BannerForAll/BannerForAll';
import Classes from '../Components/classes/Classes';
import Footer from '../Layouts/Footer/Footer';

const ClassPage = () => {
    return (
        <div>
           <BannerForAll page="our class"/>
           <Classes />
           <Footer />
        </div>
    );
};

export default ClassPage;