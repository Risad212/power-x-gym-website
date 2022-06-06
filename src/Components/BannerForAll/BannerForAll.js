import React from 'react';
import NavbarCom from '../../Components/Navbar/Navbar';
import './BannerForAll.css'

const BannerForAll = ({page}) => {
    return (
        <div>
             <NavbarCom />
             <div className="bannerForAll-container">
                <h2>{page}</h2>
             </div>
        </div>
    );
};

export default BannerForAll;