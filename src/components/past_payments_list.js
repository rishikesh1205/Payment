import React, { Component } from 'react';
import PastPaymentsItem from './past_payments_item';
import { getPastPayments } from '../services/payment_data';

export default class PastPaymentsList extends Component{
  constructor(props){
    super(props);
    this.state={
      payments: getPastPayments()
    };
  }
  componentWillMount(){
    this.setState((prevState)=>{
      payments: getPastPayments()
    })
  }
  renderPastPayments(){
    return(
      <ul className="p-0">
        {
          this.state.payments.map((payment)=>(
            <PastPaymentsItem
              key={payment.id}
              {...payment}
            />
          ))
        }
      </ul>
    );
  }
  render() {
    return (
      <div className="past-payments-list my-4 mb-5">
        <h3>Past Payments</h3>
          { this.renderPastPayments() }
      </div>
    );
  }
}
