import React from 'react';
import FormProgress from '../FormProgress/FormProgress';
import PersonalInfoForm from '../PersonalInfoForm/PersonalInfoForm';

const MemberShip = () => {
    return (
        <div className='py-5'>
           <FormProgress />
           <PersonalInfoForm />
        </div>
    );
};

export default MemberShip;