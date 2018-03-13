import React, { Component } from 'react';
import PaymentDetail from './payment_detail';

export default class PastPaymentsItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayDetails: false
    };
  }
  handleClick(){
    this.setState(
      prevState => ({
        displayDetails: (prevState.displayDetails===false) ? true : false
      })
    );
  }
  render(){
    return(
      <li>
        <div className="payment-container alert alert-secondary p-4 px-5">
          <div className="row">
            <PaymentDetail name="Account Number" value={this.props.accountNumber} />
            <PaymentDetail name="Payment Date" value={this.props.paymentDate} />
            <PaymentDetail name="Amount" value={this.props.amount} />
            <PaymentDetail name="Payment Method" value={this.props.paymentMethod} />
            <div className="col-md-2">
              <button className={`btn btn-${(this.state.displayDetails)?"secondary":"dark"}`} onClick={this.handleClick.bind(this)}>
                Details
              </button>
            </div>
          </div>
          <div className={`${(this.state.displayDetails)?"visible":"invisible"} payment-more-details`}>
            <hr/>
            <div className="row px-3">
              <PaymentDetail name="Time" value={this.props.paymentTime} />
              <PaymentDetail name="Invoice ID" value={this.props.invoiceId} />
              <PaymentDetail name="Message" value={this.props.message} />
            </div>
          </div>
        </div>
      </li>
    );
  }
}
