'use strict';

import * as accounts from '../../../../lib/data/accounts';
import accountData from '../../../support/fixtures/account-data';
import db from '../../../support/fixtures/db';

describe('data/accounts', function () {
  describe('#all()', function () {
    it('returns immutable list of all accounts from db', function () {
      const list = accounts.all(db);
      expect(list).to.have.size(4);
    });
  });

  describe('#onBudget()', function () {
    it('returns only open accounts', function () {
      const list = accounts.onBudget(db);
      expect(list).to.have.size(1);
      expect(list.last().get('closed')).to.equal(false);
    });
    it('returns only on-budget accounts', function () {
      const list = accounts.onBudget(db);
      expect(list).to.have.size(1);
      expect(list.last().get('on_budget')).to.equal(true);
    });
  });

  describe('#offBudget()', function () {
    it('returns only open accounts', function () {
      const list = accounts.offBudget(db);
      expect(list).to.have.size(1);
      expect(list.last().get('closed')).to.equal(false);
    });
    it('returns only on-budget accounts', function () {
      const list = accounts.offBudget(db);
      expect(list).to.have.size(1);
      expect(list.last().get('on_budget')).to.equal(false);
    });
  });

  describe('#open()', function () {
    it('returns all open accounts', function () {
      const list = accounts.open(db);
      expect(list).to.have.size(2);
      expect(list.first().get('closed')).to.equal(false);
      expect(list.last().get('closed')).to.equal(false);
    });
  });

  describe('#closed()', function () {
    it('returns all closed accounts', function () {
      const list = accounts.closed(db);
      expect(list).to.have.size(2);
      expect(list.first().get('closed')).to.equal(true);
      expect(list.last().get('closed')).to.equal(true);
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const [ newDb ] = accounts.insert(db, accountData);
      // todo: expect(newDb).to.be.map;
      expect(newDb).not.to.equal(db);
    });
    it('also returns the new account object', function () {
      const [ newDb, account ] = accounts.insert(db, accountData);
      expect(account).not.to.equal(accountData);
      expect(account.get('id')).to.equal(accountData.id);
      expect(account.get('name')).to.equal(accountData.name);
      expect(account.get('type')).to.equal(accountData.type);
      expect(account.get('on_budget')).to.equal(accountData.on_budget);
      expect(account.get('closed')).to.equal(accountData.closed);
    });
    it('returned db includes new account', function () {
      const [ newDb, account ] = accounts.insert(db, accountData);
      const list = accounts.all(newDb);
      expect(list).to.include(account);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const account = accounts.all(db).last().set('name', 'wat');
      const [ newDb ] = accounts.update(db, account);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the updated account object', function () {
      const account = accounts.all(db).last().set('name', 'wat');
      const [ newDb, newAccount ] = accounts.update(db, account);
      expect(account).to.equal(newAccount);
    });
    it('new db includes updated account', function () {
      const account = accounts.all(db).last().set('name', 'wat');
      const [ newDb, newAccount ] = accounts.update(db, account);
      const newList = accounts.all(newDb);
      expect(newList).to.include(newAccount);
    });
    it('accounts list in new db does not increase in size', function () {
      const oldList = accounts.all(db);
      const account = oldList.last().set('name', 'wat');
      const [ newDb ] = accounts.update(db, account);
      const newList = accounts.all(newDb);
      expect(newList).to.have.size(oldList.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const account = accounts.all(db).last();
      const newDb = accounts.remove(db, account);
      expect(newDb).not.to.equal(db);
    });
    it('new db does not include account', function () {
      const account = accounts.all(db).last();
      const newDb = accounts.remove(db, account);
      const list = accounts.all(newDb);
      expect(newDb).not.to.include(account);
    });
    it('accounts list in new db decreases in size by one', function () {
      const oldList = accounts.all(db);
      const account = oldList.last();
      const newDb = accounts.remove(db, account);
      const newList = accounts.all(newDb);
      expect(newList).to.have.size(oldList.size - 1);
    });
  });
});
