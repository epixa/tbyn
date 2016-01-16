'use strict';

import * as categories from '../../../../lib/data/categories';
import categoryData from '../../../support/fixtures/category-data';
import db from '../../../support/fixtures/db';

describe('data/categories', function () {
  describe('#all()', function () {
    it('returns immutable list of all categories from db', function () {
      const list = categories.all(db);
      expect(list).to.have.size(3);
    });
  });

  describe('#active()', function () {
    it('returns all active categories', function () {
      const list = categories.active(db);
      expect(list).to.have.size(2);
      expect(list.last().get('active')).to.equal(true);
    });
  });

  describe('#inactive()', function () {
    it('returns all inactive categories', function () {
      const list = categories.inactive(db);
      expect(list).to.have.size(1);
      expect(list.last().get('active')).to.equal(false);
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const [ newDb ] = categories.insert(db, categoryData);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the new category object', function () {
      const [ newDb, category ] = categories.insert(db, categoryData);
      expect(category).not.to.equal(categoryData);
      expect(category.get('id')).to.equal(categoryData.id);
      expect(category.get('name')).to.equal(categoryData.name);
      expect(category.get('active')).to.equal(categoryData.active);
    });
    it('returned db includes new category', function () {
      const [ newDb, category ] = categories.insert(db, categoryData);
      const list = categories.all(newDb);
      expect(list).to.include(category);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const category = categories.all(db).last().set('name', 'wat');
      const [ newDb ] = categories.update(db, category);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the updated category object', function () {
      const category = categories.all(db).last().set('name', 'wat');
      const [ newDb, newCategory ] = categories.update(db, category);
      expect(category).to.equal(newCategory);
    });
    it('new db includes updated category', function () {
      const category = categories.all(db).last().set('name', 'wat');
      const [ newDb, newCategory ] = categories.update(db, category);
      const newList = categories.all(newDb);
      expect(newList).to.include(newCategory);
    });
    it('categories list in new db does not increase in size', function () {
      const oldList = categories.all(db);
      const category = oldList.last().set('name', 'wat');
      const [ newDb ] = categories.update(db, category);
      const newList = categories.all(newDb);
      expect(newList).to.have.size(oldList.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const category = categories.all(db).last();
      const newDb = categories.remove(db, category);
      expect(newDb).not.to.equal(db);
    });
    it('new db does not include category', function () {
      const category = categories.all(db).last();
      const newDb = categories.remove(db, category);
      const list = categories.all(newDb);
      expect(newDb).not.to.include(category);
    });
    it('categories list in new db decreases in size by one', function () {
      const oldList = categories.all(db);
      const category = oldList.last();
      const newDb = categories.remove(db, category);
      const newList = categories.all(newDb);
      expect(newList).to.have.size(oldList.size - 1);
    });
  });
});
