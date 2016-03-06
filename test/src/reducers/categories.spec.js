'use strict';

import { fromJS } from 'immutable';

import reducer from '../../../src/reducers/categories';
import data, { requiredCategoryData } from '../../support/fixtures/category-data';

describe('data/categories/reducer', function () {
  context('ADD_CATEGORY', function () {
    it('to create new category in list', function () {
      const stateBefore = undefined;
      const stateAfter = fromJS([ data ]);
      const state = reducer(stateBefore, {
        data: requiredCategoryData,
        type: 'ADD_CATEGORY'
      });
      expect(state).to.equal(stateAfter);
    });
  });

  context('UPDATE_CATEGORY', function () {
    it('to update existing category in list', function () {
      const category = fromJS(Object.assign({}, data, { name: 'nowai' }));
      const stateBefore = fromJS([ data ]);
      const stateAfter = fromJS([ category ]);
      const state = reducer(stateBefore, {
        category,
        type: 'UPDATE_CATEGORY'
      });
      expect(state).to.equal(stateAfter);
    });
  });

  context('DELETE_CATEGORY', function () {
    it('to remove existing category from list', function () {
      const category = fromJS(data);
      const otherAccount = fromJS(Object.assign({}, data, { id: '234' }));
      const stateBefore = fromJS([ category, otherAccount ]);
      const stateAfter = fromJS([ otherAccount ]);
      const state = reducer(stateBefore, {
        category,
        type: 'DELETE_CATEGORY'
      });
      expect(state).to.equal(stateAfter);
    });
  });
});
