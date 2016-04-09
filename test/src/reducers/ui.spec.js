'use strict';

import { fromJS } from 'immutable';

import deepFreeze from '../../support/helpers/deep-freeze';
import reducer from '../../../src/reducers/ui';

describe('src/reducers/ui', function () {
  context('SHOW_ADD_ACCOUNT', function () {
    it('sets showAddAccount to true', function () {
      const action = { type: 'SHOW_ADD_ACCOUNT' };
      const stateBefore = undefined;
      const stateAfter = { showAddAccount: true };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });

  context('CREATE_ACCOUNT', function () {
    it('sets showAddAccount to false', function () {
      const action = { type: 'CREATE_ACCOUNT' };
      const stateBefore = { showAddAccount: true };
      const stateAfter = { showAddAccount: false };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });
});
