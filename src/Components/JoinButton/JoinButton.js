import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinButton.css';

const JoinButton = () => {
    const navigate = useNavigate()
    return (
        <div className='joinBtnContainer'>
           <button onClick={() => navigate('/price')}>Join Us</button> 
        </div>
    );
};

export default JoinButton;