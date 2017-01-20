import deepFreeze from '../../support/helpers/deep-freeze';
import reducer from '../../../src/reducers/navigation';

describe('src/reducers/navigation', function () {
  it('sets truncated to false by default', function () {
    const action = {};
    const stateBefore = undefined;

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state.truncated).to.deep.equal(false);
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

  context('SHOW_BUDGET', function () {
    it('sets currentPanel to "budget"', function () {
      const action = { type: 'SHOW_BUDGET' };
      const stateBefore = { currentPanel: 'something else' };
      const stateAfter = { currentPanel: 'budget' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });

  context('SHOW_REPORTS', function () {
    it('sets currentPanel to "reports"', function () {
      const action = { type: 'SHOW_REPORTS' };
      const stateBefore = { currentPanel: 'something else' };
      const stateAfter = { currentPanel: 'reports' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });

  context('SHOW_TRANSACTIONS', function () {
    it('sets currentPanel to "transactions"', function () {
      const action = { type: 'SHOW_TRANSACTIONS' };
      const stateBefore = { currentPanel: 'something else' };
      const stateAfter = { currentPanel: 'transactions' };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });
});
