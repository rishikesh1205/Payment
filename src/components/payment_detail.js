import React from 'react';

const PaymentDetail=({name, value})=>
  (
      <div className="col">
        <div className="row">
          <h6 className="font-weight-light">{name}</h6>
        </div>
        <div className="row">
          <h5 className="">
            {value}
          </h5>
        </div>
      </div>

  );
export default PaymentDetail;
