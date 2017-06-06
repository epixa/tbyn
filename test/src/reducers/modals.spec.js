import deepFreeze from '../../support/helpers/deep-freeze';
import reducer from '../../../src/reducers/modals';

describe('src/reducers/modals', function () {
  it('sets currentModal to null by default', function () {
    const action = {};
    const stateBefore = undefined;

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state.currentModal).to.equal(null);
  });

  context('SHOW_ADD_ACCOUNT', function () {
    it('sets currentModal to "add-account"', function () {
      const action = { type: 'SHOW_ADD_ACCOUNT' };
      const stateBefore = { currentModal: null };
      const stateAfter = { currentModal: 'add-account' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });

  context('CANCEL_ADD_ACCOUNT', function () {
    it('sets currentModal to null', function () {
      const action = { type: 'CANCEL_ADD_ACCOUNT' };
      const stateBefore = { currentModal: 'add-account' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state.currentModal).to.deep.equal(null);
    });
  });

  context('CREATE_ACCOUNT', function () {
    it('sets currentModal to null', function () {
      const action = { type: 'CREATE_ACCOUNT' };
      const stateBefore = { currentModal: 'add-account' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state.currentModal).to.deep.equal(null);
    });
  });
});
