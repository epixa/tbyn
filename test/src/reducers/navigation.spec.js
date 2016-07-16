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
});
