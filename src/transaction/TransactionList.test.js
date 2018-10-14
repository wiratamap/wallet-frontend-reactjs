/* global describe it expect */

import { shallow } from 'enzyme/build';
import React from 'react';
import TransactionList from './TransactionList';

describe('Transaction List', () => {

  describe('render', () => {
    it('should have table component on Transaction List component', () => {
      const component = () => shallow(<TransactionList transactions={[]} />);
      expect(component().find('#transaction-list').length).toBe(1);
    });

    it('should have proper table head definition', () => {
      const component = () => shallow(<TransactionList transactions={[]} />);
      expect(component().find('#transaction-list').find('thead').find('th')
        .at(0)
        .text()).toEqual('Transaction Id');
      expect(component().find('#transaction-list').find('thead').find('th')
        .at(1)
        .text()).toEqual('Amount');
      expect(component().find('#transaction-list').find('thead').find('th')
        .at(2)
        .text()).toEqual('Type');
      expect(component().find('#transaction-list').find('thead').find('th')
        .at(3)
        .text()).toEqual('Time');
    });

    it('should display one transaction', () => {
      const transactions = [
        {
          id: '123',
          amount: 10000,
          transactionType: 'DEBIT',
          transactionDate: 1537493705061,
        },
      ];

      const component = shallow(<TransactionList transactions={transactions}/>)

      expect(component.find('#transaction-list').find('tbody')
        .find('td')
        .at(0)
        .text()).toEqual('123');
      expect(component.find('#transaction-list').find('tbody').find('td')
        .at(1)
        .text()).toEqual('10000');
      expect(component.find('#transaction-list').find('tbody').find('td')
        .at(2)
        .text()).toEqual('DEBIT');
      expect(component.find('#transaction-list').find('tbody').find('td')
        .at(3)
        .text()).toEqual(new Date(1537493705061).toUTCString());
    });

    it('should display two transaction', () => {
      const transactions = [
        {
          id: '123',
        },
        {
          id: '124',
        },
      ];

      const component = shallow(<TransactionList transactions={transactions}/>)

      expect(component.find('#transaction-list').find('tbody')
        .find('tr').at(0)
        .find('td').at(0).text()).toEqual('123');
      expect(component.find('#transaction-list').find('tbody')
        .find('tr').at(1)
        .find('td').at(0)
        .text()).toEqual('124');
    });
  });
});
