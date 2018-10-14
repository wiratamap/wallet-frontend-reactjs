/* global describe it expect */
import React from 'react';
import { shallow } from 'enzyme';
import WalletInformation from './WalletInformation';

describe('Wallet Information', () => {
  const walletData = {
    balance: 10000,
    account: {
      name: 'Wiratama Paramasatya',
    },
  };

  const component = () => shallow(<WalletInformation wallet={walletData} />);

  describe('render', () => {
    it('should have table element to display some information', () => {
      expect(component().find('#wallet-information').length).toBe(1);
    });

    it('should contain owner name on table', () => {
      expect(component().find('#wallet-information').find('td').at(0)
        .text()).toEqual('Wiratama Paramasatya');
    });

    it('should contain balance name on table', () => {
      expect(component().find('#wallet-information').find('td').at(1)
        .text()).toEqual('10000');
    });
  });
});
