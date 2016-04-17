'use strict';

import { fromJS } from 'immutable';

import reducer from '../../../src/reducers/payees';
import data, { requiredPayeeData, startingBalance } from '../../support/fixtures/payee-data';

describe('data/payees/reducer', function () {
  context('ADD_PAYEE', function () {
    it('to create new payee in list', function () {
      const stateBefore = undefined;
      const stateAfter = fromJS([ startingBalance, data ]);
      const state = reducer(stateBefore, {
        data: requiredPayeeData,
        type: 'ADD_PAYEE'
      });
      expect(state).to.equal(stateAfter);
    });
  });
});
