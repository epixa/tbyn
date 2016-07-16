import deepFreeze from '../../support/helpers/deep-freeze';
import reducer from '../../../src/reducers/sidebar';

describe('src/reducers/sidebar', function () {
  it('sets collapsed to false by default', function () {
    const action = {};
    const stateBefore = undefined;

    deepFreeze(action, stateBefore);

    const state = reducer(stateBefore, action);
    expect(state.collapsed).to.deep.equal(false);
  });

  context('TOGGLE_SIDEBAR', function () {
    it('sets collapsed to true if it was previously false', function () {
      const action = { type: 'TOGGLE_SIDEBAR' };
      const stateBefore = { collapsed: false };
      const stateAfter = { collapsed: true };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
    it('sets collapsed to false if it was previously true', function () {
      const action = { type: 'TOGGLE_SIDEBAR' };
      const stateBefore = { collapsed: true };
      const stateAfter = { collapsed: false };

      deepFreeze(action, stateBefore);

      const state = reducer(stateBefore, action);
      expect(state).to.deep.equal(stateAfter);
    });
  });
});
