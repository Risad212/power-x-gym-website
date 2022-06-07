import React from 'react';
import PersonalInfoForm from '../PersonalInfoForm/PersonalInfoForm';
import './MemberShip.css';

const MemberShip = () => {
    return (
        <div className='memberShipContainer py-5'>
           <div className="memberShitTitle">
               <h2 style={{background: '#ffdb42'}}>1</h2>
               <h2>----------------</h2>
               <h2>2</h2>
               <h2>----------------</h2>
               <h2>3</h2>
           </div>
           <div className='memberShitTitle' style={{justifyContent: 'center'}}>
              <p>Personal Details</p>
              <p>---------------</p>
              <p>Bank payment</p>
              <p>---------------</p>
              <p>Membership created</p>
           </div>
           <PersonalInfoForm />
        </div>
    );
};

export default MemberShip;