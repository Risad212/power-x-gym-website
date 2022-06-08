import React from 'react';
import FormProgress from '../FormProgress/FormProgress';
import PaymentCard from '../PaymentCard/PaymentCard';

const PaymentForm = () => {
    return (
        <div className='py-3'>
          <FormProgress />
          <PaymentCard />
        </div>
    );
};

export default PaymentForm;