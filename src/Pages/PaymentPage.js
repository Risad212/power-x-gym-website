import React from 'react';
import BannerForAll from '../Components/BannerForAll/BannerForAll';
import PaymentForm from '../Components/PaymentForm/PaymentForm';
import Footer from '../Layouts/Footer/Footer';

const PaymentPage = () => {
    return (
        <div>
          <BannerForAll page="your gym membership"/>
          <PaymentForm />
          <Footer />
        </div>
    );
};

export default PaymentPage;