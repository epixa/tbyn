'use strict';

import * as payees from '../../../../lib/data/payees';
import payeeData from '../../../support/fixtures/payee-data';
import db from '../../../support/fixtures/db';

describe('data/payees', function () {
  describe('#all()', function () {
    it('returns immutable list of all payees from db', function () {
      const list = payees.all(db);
      expect(list).to.have.size(1);
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const [ newDb ] = payees.insert(db, payeeData);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the new payee object', function () {
      const [ newDb, payee ] = payees.insert(db, payeeData);
      expect(payee).not.to.equal(payeeData);
      expect(payee.get('id')).to.equal(payeeData.id);
      expect(payee.get('name')).to.equal(payeeData.name);
    });
    it('returned db includes new payee', function () {
      const [ newDb, payee ] = payees.insert(db, payeeData);
      const list = payees.all(newDb);
      expect(list).to.include(payee);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const payee = payees.all(db).last().set('name', 'wat');
      const [ newDb ] = payees.update(db, payee);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the updated payee object', function () {
      const payee = payees.all(db).last().set('name', 'wat');
      const [ newDb, newCategory ] = payees.update(db, payee);
      expect(payee).to.equal(newCategory);
    });
    it('new db includes updated payee', function () {
      const payee = payees.all(db).last().set('name', 'wat');
      const [ newDb, newCategory ] = payees.update(db, payee);
      const newList = payees.all(newDb);
      expect(newList).to.include(newCategory);
    });
    it('payees list in new db does not increase in size', function () {
      const oldList = payees.all(db);
      const payee = oldList.last().set('name', 'wat');
      const [ newDb ] = payees.update(db, payee);
      const newList = payees.all(newDb);
      expect(newList).to.have.size(oldList.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const payee = payees.all(db).last();
      const newDb = payees.remove(db, payee);
      expect(newDb).not.to.equal(db);
    });
    it('new db does not include payee', function () {
      const payee = payees.all(db).last();
      const newDb = payees.remove(db, payee);
      const list = payees.all(newDb);
      expect(newDb).not.to.include(payee);
    });
    it('payees list in new db decreases in size by one', function () {
      const oldList = payees.all(db);
      const payee = oldList.last();
      const newDb = payees.remove(db, payee);
      const newList = payees.all(newDb);
      expect(newList).to.have.size(oldList.size - 1);
    });
  });
});
