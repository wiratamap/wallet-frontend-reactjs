/* global describe it expect */
import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import DashboardContainer from './DashboardContainer';

describe('Dashboard Container', () => {
  const component = () => shallow(<DashboardContainer />);

  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  describe('render', () => {
    it('should have Wallet Information component in Dashboard Container', () => {
      expect(component().find('WalletInformation').length).toBe(1);
    });

    it('should retrieve wallet props at WalletInformation component', () => {
      expect(component().find('WalletInformation').props().wallet).toBeTruthy();
    });
  });

  describe('component did mount', () => {
    it('should call the wallet service once', async () => {
      component();
      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {},
      }));

      await Promise.resolve();

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
  });
});
