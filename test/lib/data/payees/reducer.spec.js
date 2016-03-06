'use strict';

import { fromJS } from 'immutable';

import reducer from '../../../../lib/data/payees/reducer';
import data, { requiredPayeeData } from '../../../support/fixtures/payee-data';

describe('data/payees/reducer', function () {
  context('ADD_PAYEE', function () {
    it('to create new payee in list', function () {
      const stateBefore = undefined;
      const stateAfter = fromJS([ data ]);
      const state = reducer(stateBefore, {
        data: requiredPayeeData,
        type: 'ADD_PAYEE'
      });
      expect(state).to.equal(stateAfter);
    });
  });
});
