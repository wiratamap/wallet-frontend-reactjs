import React from 'react';

const WalletInformation = ({ wallet }) => (
  <div className="dashboard__wallet-information">
    <table id="wallet-information">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{wallet.account.name}</td>
        </tr>
        <tr>
          <th>Balance</th>
          <td>{wallet.balance}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default WalletInformation;
