import { fromJS } from 'immutable';

import reducer from '../../../src/reducers/accounts';
import accountData, { requiredAccountData } from '../../support/fixtures/account-data';

describe('data/accounts/reducer', function () {
  context('CREATE_ACCOUNT', function () {
    it('to create new account in list', function () {
      const stateBefore = undefined;
      const stateAfter = fromJS([accountData]);
      const state = reducer(stateBefore, {
        account: requiredAccountData,
        type: 'CREATE_ACCOUNT',
      });
      expect(state).to.equal(stateAfter);
    });
  });

  context('UPDATE_ACCOUNT', function () {
    it('to update existing account in list', function () {
      const account = fromJS(Object.assign({}, accountData, { name: 'nowai' }));
      const stateBefore = fromJS([accountData]);
      const stateAfter = fromJS([account]);
      const state = reducer(stateBefore, {
        account,
        type: 'UPDATE_ACCOUNT',
      });
      expect(state).to.equal(stateAfter);
    });
  });

  context('DELETE_ACCOUNT', function () {
    it('to remove existing account from list', function () {
      const account = fromJS(accountData);
      const otherAccount = fromJS(Object.assign({}, accountData, { id: '234' }));
      const stateBefore = fromJS([account, otherAccount]);
      const stateAfter = fromJS([otherAccount]);
      const state = reducer(stateBefore, {
        account,
        type: 'DELETE_ACCOUNT',
      });
      expect(state).to.equal(stateAfter);
    });
  });
});
