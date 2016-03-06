'use strict';

import * as payees from '../../../../lib/data/payees';
import payeeData from '../../../support/fixtures/payee-data';
import db from '../../../support/fixtures/db';

describe('data/payees', function () {
  let payeesDb;
  beforeEach(function () {
    payeesDb = db.get('payees');
  });

  describe('#empty()', function () {
    it('returns an empty immutable list', function () {
      const list = payees.empty();
      expect(list).to.have.size(0);
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const list = payees.insert(payeesDb, payeeData);
      expect(list).not.to.equal(payeesDb);
    });
    it('returned db includes new payee', function () {
      const list = payees.insert(payeesDb, payeeData);
      const payee = list.find(p => p.get('id') === payeeData.id);
      expect(list).to.include(payee);
    });
    it('also returns the new payee object', function () {
      const list = payees.insert(payeesDb, payeeData);
      const payee = list.find(p => p.get('id') === payeeData.id);
      expect(payee).not.to.equal(payeeData);
      expect(payee.get('id')).to.equal(payeeData.id);
      expect(payee.get('name')).to.equal(payeeData.name);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const payee = payeesDb.last().set('name', 'wat');
      const list = payees.update(payeesDb, payee);
      expect(list).not.to.equal(payeesDb);
    });
    it('new db includes updated payee', function () {
      const payee = payeesDb.last().set('name', 'wat');
      const list = payees.update(payeesDb, payee);
      const newPayee = list.find(p => p.get('id') === payee.get('id'));
      expect(list).to.include(newPayee);
    });
    it('payees list in new db does not increase in size', function () {
      const payee = payeesDb.last().set('name', 'wat');
      const list = payees.update(payeesDb, payee);
      expect(list).to.have.size(payeesDb.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const payee = payeesDb.last();
      const list = payees.remove(payeesDb, payee);
      expect(list).not.to.equal(payeesDb);
    });
    it('new db does not include payee', function () {
      const payee = payeesDb.last();
      const list = payees.remove(payeesDb, payee);
      expect(list).not.to.include(payee);
    });
    it('payees list in new db decreases in size by one', function () {
      const payee = payeesDb.last();
      const list = payees.remove(payeesDb, payee);
      expect(list).to.have.size(payeesDb.size - 1);
    });
  });
});
