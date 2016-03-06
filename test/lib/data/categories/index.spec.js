'use strict';

import * as categories from '../../../../lib/data/categories';
import categoryData from '../../../support/fixtures/category-data';
import db from '../../../support/fixtures/db';

describe('data/categories', function () {
  let categoriesDb;
  beforeEach(function () {
    categoriesDb = db.get('categories');
  });

  describe('#empty()', function () {
    it('returns an empty immutable list', function () {
      const list = categories.empty();
      expect(list).to.have.size(0);
    });
  });

  describe('#active()', function () {
    it('returns all active categories', function () {
      const list = categories.active(categoriesDb);
      expect(list).to.have.size(2);
      expect(list.last().get('active')).to.equal(true);
    });
  });

  describe('#inactive()', function () {
    it('returns all inactive categories', function () {
      const list = categories.inactive(categoriesDb);
      expect(list).to.have.size(1);
      expect(list.last().get('active')).to.equal(false);
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const list = categories.insert(categoriesDb, categoryData);
      expect(list).not.to.equal(categoriesDb);
    });
    it('returned db includes new category', function () {
      const list = categories.insert(categoriesDb, categoryData);
      const category = list.find(c => c.get('id') === categoryData.id);
      expect(list).to.include(category);
    });
    it('also returns the new category object', function () {
      const list = categories.insert(categoriesDb, categoryData);
      const category = list.find(c => c.get('id') === categoryData.id);
      expect(category).not.to.equal(categoryData);
      expect(category.get('id')).to.equal(categoryData.id);
      expect(category.get('name')).to.equal(categoryData.name);
      expect(category.get('active')).to.equal(categoryData.active);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const category = categoriesDb.last().set('name', 'wat');
      const list = categories.update(categoriesDb, category);
      expect(list).not.to.equal(categoriesDb);
    });
    it('new db includes updated category', function () {
      const category = categoriesDb.last().set('name', 'wat');
      const list = categories.update(categoriesDb, category);
      const newCategory = list.find(c => c.get('id') === category.get('id'));
      expect(list).to.include(newCategory);
    });
    it('categories list in new db does not increase in size', function () {
      const category = categoriesDb.last().set('name', 'wat');
      const list = categories.update(categoriesDb, category);
      expect(list).to.have.size(categoriesDb.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const category = categoriesDb.last();
      const list = categories.remove(categoriesDb, category);
      expect(list).not.to.equal(categoriesDb);
    });
    it('new db does not include category', function () {
      const category = categoriesDb.last();
      const list = categories.remove(categoriesDb, category);
      expect(list).not.to.include(category);
    });
    it('categories list in new db decreases in size by one', function () {
      const category = categoriesDb.last();
      const list = categories.remove(categoriesDb, category);
      expect(list).to.have.size(categoriesDb.size - 1);
    });
  });
});
