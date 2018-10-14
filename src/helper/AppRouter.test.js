/* global describe it expect */
import { shallow } from 'enzyme';
import React from 'react';
import AppRouter from './AppRouter';
import DashboardContainer from '../dashboard/DashboardContainer';
import TransactionContainer from '../transaction/TransactionContainer';

describe('App Router', () => {
  const appRouter = shallow(<AppRouter />);

  describe('render', () => {
    it('should have routes ', () => {
      const routers = appRouter.find('Route');

      expect(routers.at(0).props().component).toBe(DashboardContainer);
      expect(routers.at(1).props().component).toBe(TransactionContainer);
    });
  });
});
