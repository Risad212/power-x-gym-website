import React from 'react';
import BannerForAll from '../Components/BannerForAll/BannerForAll';
import MemberShip from '../Components/MemberShip/MemberShip';
import Footer from '../Layouts/Footer/Footer';


const MemberShipPage = () => {
    return (
        <div>
          <BannerForAll page="your gym membership"/>
           <MemberShip />
          <Footer />
        </div>
    );
};

export default MemberShipPage;