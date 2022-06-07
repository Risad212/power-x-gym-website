import React from 'react';
import BannerForAll from '../Components/BannerForAll/BannerForAll';
import PricePlan from '../Components/pricePlan/PricePlan';
import Footer from '../Layouts/Footer/Footer';

const PricingPage = () => {
    return (
        <div>
           <BannerForAll page="pricing plans"/>
           <PricePlan />
           <Footer />
        </div>
    );
};

export default PricingPage;