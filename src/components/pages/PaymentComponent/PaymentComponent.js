

import React from 'react';
import './PaymentComponent.scss';

const PaymentComponent = () => {
  return (
    <div className="credit-card">
      <div className="card">
        <div className="card-front">
          <div className="chip bg-white"></div>
          <div className="card-number text-white">1234 5678 4321 8765</div>
          <div className="card-info d-flex justify-content-between">
            <div className="card-holder text-white">Monica Manisha</div>
            <div className="card-expiry text-white">09/23</div>
          </div>
         
        </div>
        <div className="card-back">
          <div className="magnetic-stripe"></div>
          <div className="signature"></div>
          <div className="cvv text-white">123</div>
        </div>
      
      </div>
      <div className="card-details ms-5">
        <div className="mb-3"><h6>Name on Card:</h6><input type="text" placeholder="Name on Card"/></div>
        <div className="mb-3"><h6>Card Number:</h6><input type="text" placeholder="Card Number"/></div>
        <div className="mb-3"><h6>Expiration Date:</h6><input type="text" placeholder="Expiration Date"/></div>
        <div className="mb-3"><h6>CVC:</h6><input type="text" placeholder='CVC' /></div>
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
     
    </div>
  );
};

export default PaymentComponent;
