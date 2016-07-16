import { defaults } from 'lodash';
import * as schema from '../../../../lib/data/categories/schema';
import categoryData, { requiredCategoryData } from '../../../support/fixtures/category-data';
import categoryFixture from '../../../support/fixtures/category';

describe('data/categories/schema', function () {
  describe('#isActive()', function () {
    it('returns true when category is active', function () {
      const updatedCategory = categoryFixture.set('active', true);
      const flag = schema.isActive(updatedCategory);
      expect(flag).to.be.true;
    });
    it('returns false when category is not active', function () {
      const updatedCategory = categoryFixture.set('active', false);
      const flag = schema.isActive(updatedCategory);
      expect(flag).to.be.false;
    });
  });

  describe('#cast()', function () {
    function callCastWith(overrides) {
      return schema.cast(defaults(overrides, categoryData));
    }

    it('returns immutable category', function () {
      const category = schema.cast(categoryData);
      expect(category).to.have.keys(schema.defaults);
    });
    it('category active defaults to true if not given a value', function () {
      const category = schema.cast(requiredCategoryData);
      expect(category.get('active')).to.be.true;
    });
    it('allows overiding of defaults', function () {
      const overrides = {
        active: false,
      };
      const category = schema.cast(defaults(overrides, categoryData));
      expect(category.get('active')).to.equal(overrides.active);
    });
    it('throws if given invalid id', function () {
      expect(() => callCastWith({ id: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ id: '' })).to.throw(Error);
    });
    it('throws if given invalid name', function () {
      expect(() => callCastWith({ name: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ name: '' })).to.throw(Error);
    });
    it('throws if given invalid active', function () {
      expect(() => callCastWith({ active: 'true' })).to.throw(TypeError);
      expect(() => callCastWith({ active: 1 })).to.throw(TypeError);
    });
  });
});
