import React, { Component } from 'react';
import { getPaymentDue } from '../services/payment_data';
import PaymentDetail from './payment_detail';

export default class PaymentsDue extends Component{
  constructor(props){
    super(props);
    this.state={
      due: getPaymentDue()
    };
  }
  componentWillMount(){
    this.setState((prevState)=>{
      due: getPaymentDue()
    });
  }
  render() {
    return (
      <div className="payments-due my-1">
        <h3>Payments Due</h3>
        <div className="alert alert-success p-4 px-4">
          <div className="row px-3">
            <PaymentDetail name="Account Number" value={this.state.due.accountNumber} />
            <PaymentDetail name="Due Date" value={this.state.due.dueDate} />
            <PaymentDetail name="Amount" value={this.state.due.amount} />
            <div className="col p-2">
              <button className="btn btn-success align-middle w-75 px-5 p-2">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
