import React from 'react';
import BannerForAll from '../Components/BannerForAll/BannerForAll';
import Schedule from '../Components/Schedule/Schedule';
import Footer from '../Layouts/Footer/Footer';

const SchedulePage = () => {
    return (
        <div>
           <BannerForAll page="advanced gym"/>
            <Schedule />
           <Footer />
        </div>
    );
};

export default SchedulePage;