import React from 'react';
import './FormProgress.css';
const FormProgress = () => {
    return (
        <div>
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
        </div>
    );
};

export default FormProgress;