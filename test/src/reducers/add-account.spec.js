import deepFreeze from '../../support/helpers/deep-freeze';
import reducer from '../../../src/reducers/add-account';

describe('src/reducers/add-account', function () {
  it('sets active to false by default', function () {
    const action = {};
    const stateBefore = undefined;

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state.active).to.equal(false);
  });
  it('sets newAccountType to null by default', function () {
    const action = {};
    const stateBefore = undefined;

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state.newAccountType).to.equal(null);
  });
  it('sets truncated to false by default', function () {
    const action = {};
    const stateBefore = undefined;

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state.truncated).to.equal(false);
  });

  context('TOGGLE_SIDEBAR', function () {
    it('sets truncated to true if it was previously false', function () {
      const action = { type: 'TOGGLE_SIDEBAR' };
      const stateBefore = { truncated: false };
      const stateAfter = { truncated: true };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
    it('sets truncated to false if it was previously true', function () {
      const action = { type: 'TOGGLE_SIDEBAR' };
      const stateBefore = { truncated: true };
      const stateAfter = { truncated: false };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
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

  context('CANCEL_ADD_ACCOUNT', function () {
    it('sets active to false', function () {
      const action = { type: 'CANCEL_ADD_ACCOUNT' };
      const stateBefore = { active: true };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state.active).to.deep.equal(false);
    });
    it('sets newAccountType to null', function () {
      const action = { type: 'CANCEL_ADD_ACCOUNT' };
      const stateBefore = { newAccountType: 'savings' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state.newAccountType).to.deep.equal(null);
    });
  });

  context('CREATE_ACCOUNT', function () {
    it('sets active to false', function () {
      const action = { type: 'CREATE_ACCOUNT' };
      const stateBefore = { active: true };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state.active).to.deep.equal(false);
    });
    it('sets newAccountType to null', function () {
      const action = { type: 'CREATE_ACCOUNT' };
      const stateBefore = { newAccountType: 'savings' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state.newAccountType).to.deep.equal(null);
    });
  });

  context('CHANGE_ADD_ACCOUNT_TYPE', function () {
    it('sets newAccountType', function () {
      const action = { type: 'CHANGE_ADD_ACCOUNT_TYPE', newAccountType: 'savings' };
      const stateBefore = {};
      const stateAfter = { newAccountType: 'savings' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });
});
