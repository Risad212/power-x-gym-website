import React from 'react';
import BannerForAll from '../../Components/BannerForAll/BannerForAll';
import BannerHome from '../../Components/BannerHome/BannerHome'

const Banner = ({page}) => {
    return (
        <>
         {page === 'home'?  <BannerHome />: page === 'class'? <BannerForAll />: ''}
        </>
    );
};

export default Banner;