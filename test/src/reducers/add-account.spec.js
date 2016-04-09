'use strict';

import { fromJS } from 'immutable';

import deepFreeze from '../../support/helpers/deep-freeze';
import reducer from '../../../src/reducers/add-account';

describe('src/reducers/add-account', function () {
  it('sets active to false by default', function () {
    const action = {};
    const stateBefore = undefined;
    const stateAfter = { active: false };

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state).to.deep.equal(stateAfter);
  });

  context('SHOW_ADD_ACCOUNT', function () {
    it('sets active to true', function () {
      const action = { type: 'SHOW_ADD_ACCOUNT' };
      const stateBefore = { active: false };
      const stateAfter = { active: true };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });

  context('CREATE_ACCOUNT', function () {
    it('sets active to false', function () {
      const action = { type: 'CREATE_ACCOUNT' };
      const stateBefore = { active: true };
      const stateAfter = { active: false };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });
});
