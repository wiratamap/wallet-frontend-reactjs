import React from 'react';
import { Route, Link } from 'react-router-dom';
import DashboardContainer from '../dashboard/DashboardContainer';
import TransactionContainer from '../transaction/TransactionContainer';
import logo from '../btpn-logo.svg';

const AppRouter = () => (
  <div>
    <ul className="app-router">
      <img src={logo} alt="logo" className="app-logo" />
      <li className="active">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/transaction">Transaction</Link>
      </li>
    </ul>
    <br></br>

    <Route path="/dashboard" component={DashboardContainer} />
    <Route path="/transaction" component={TransactionContainer} />
  </div>
);

export default AppRouter;
