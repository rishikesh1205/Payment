import React, { Component } from 'react';
import '../css/app.css';
import PastPaymentsList from './past_payments_list';
import PaymentsDue from './payments_due';
import Header from './header';
import SideBar from './sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row flex-xl-nowrap">
            <div className="col bg-dark text-light px-0">
              <SideBar />
            </div>
            <div className="col-10 px-5">
              <h2>Payments</h2>
              <PaymentsDue/>
              <PastPaymentsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
