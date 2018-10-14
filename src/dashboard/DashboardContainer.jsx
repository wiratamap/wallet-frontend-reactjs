import React, { Component } from 'react';
import WalletInformation from './WalletInformation';
import getWalletData from './WalletService';

export default class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {
      wallet: {
        balance: '',
        account: {
          name: '',
        },
      },
    };
  }

  async componentDidMount() {
    const response = await getWalletData();
    this.setState({
      wallet: response.data,
    });
  }

  render() {
    const { wallet } = this.state;
    return (
      <div className="dashboard">
        <WalletInformation wallet={wallet} />
      </div>
    );
  }
}
