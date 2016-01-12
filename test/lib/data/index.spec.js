'use strict';

import * as accounts from '../../../lib/data/accounts';
import accountData from '../../support/fixtures/account-data';
import db from '../../support/fixtures/db';

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
    it('returned db includes new account', function () {
      const [ newDb, account ] = accounts.insert(db, accountData);
      const list = accounts.all(newDb);
      expect(list).to.include(account);
    });
    it('creates an immutable map of the given account data', function () {
      const [ newDb, account ] = accounts.insert(db, accountData);
      // todo: expect(account).to.be.map;
      expect(account.get('id')).to.equal(accountData.id);
      expect(account.get('name')).to.equal(accountData.name);
      expect(account.get('type')).to.equal(accountData.type);
      expect(account.get('on_budget')).to.equal(accountData.on_budget);
      expect(account.get('closed')).to.equal(accountData.closed);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const account = accounts.all(db).first().set('name', 'wat');
      const [ newDb ] = accounts.update(db, account);
      expect(newDb).not.to.equal(db);
    });
    it('returned db includes updated account');
    it('creates an immutable map of the given account data');
  });

  describe('#delete()', function () {

  });
});
