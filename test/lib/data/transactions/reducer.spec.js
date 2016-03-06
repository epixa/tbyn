'use strict';

import { fromJS } from 'immutable';

import reducer from '../../../../lib/data/transactions/reducer';
import data from '../../../support/fixtures/transaction-data';

describe('data/transactions/reducer', function () {
  context('ADD_TRANSACTION', function () {
    it('to create new transaction in list', function () {
      const stateBefore = undefined;
      const stateAfter = fromJS([ data ]);
      const state = reducer(stateBefore, {
        data,
        type: 'ADD_TRANSACTION'
      });
      expect(state).to.equal(stateAfter);
    });
  });

  context('UPDATE_TRANSACTION', function () {
    it('to update existing transaction in list', function () {
      const transaction = fromJS(Object.assign({}, data, { name: 'nowai' }));
      const stateBefore = fromJS([ data ]);
      const stateAfter = fromJS([ transaction ]);
      const state = reducer(stateBefore, {
        transaction,
        type: 'UPDATE_TRANSACTION'
      });
      expect(state).to.equal(stateAfter);
    });
  });

  context('DELETE_TRANSACTION', function () {
    it('to remove existing transaction from list', function () {
      const transaction = fromJS(data);
      const otherAccount = fromJS(Object.assign({}, data, { id: '234' }));
      const stateBefore = fromJS([ transaction, otherAccount ]);
      const stateAfter = fromJS([ otherAccount ]);
      const state = reducer(stateBefore, {
        transaction,
        type: 'DELETE_TRANSACTION'
      });
      expect(state).to.equal(stateAfter);
    });
  });
});
