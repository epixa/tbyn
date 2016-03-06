'use strict';

import * as accounts from '../../../../lib/data/accounts';
import accountData from '../../../support/fixtures/account-data';
import db from '../../../support/fixtures/db';

describe('data/accounts', function () {
  let accountsDb;
  beforeEach(function () {
    accountsDb = db.get('accounts');
  });

  describe('#empty()', function () {
    it('returns an empty immutable list', function () {
      const list = accounts.empty();
      expect(list).to.have.size(0);
    });
  });

  describe('#onBudget()', function () {
    it('returns only open accounts', function () {
      const list = accounts.onBudget(accountsDb);
      expect(list).to.have.size(1);
      expect(list.last().get('closed')).to.equal(false);
    });
    it('returns only on-budget accounts', function () {
      const list = accounts.onBudget(accountsDb);
      expect(list).to.have.size(1);
      expect(list.last().get('on_budget')).to.equal(true);
    });
  });

  describe('#offBudget()', function () {
    it('returns only open accounts', function () {
      const list = accounts.offBudget(accountsDb);
      expect(list).to.have.size(1);
      expect(list.last().get('closed')).to.equal(false);
    });
    it('returns only on-budget accounts', function () {
      const list = accounts.offBudget(accountsDb);
      expect(list).to.have.size(1);
      expect(list.last().get('on_budget')).to.equal(false);
    });
  });

  describe('#open()', function () {
    it('returns all open accounts', function () {
      const list = accounts.open(accountsDb);
      expect(list).to.have.size(2);
      expect(list.first().get('closed')).to.equal(false);
      expect(list.last().get('closed')).to.equal(false);
    });
  });

  describe('#closed()', function () {
    it('returns all closed accounts', function () {
      const list = accounts.closed(accountsDb);
      expect(list).to.have.size(2);
      expect(list.first().get('closed')).to.equal(true);
      expect(list.last().get('closed')).to.equal(true);
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const list = accounts.insert(accountsDb, accountData);
      expect(list).not.to.equal(accountsDb);
    });
    it('returned db includes new account', function () {
      const list = accounts.insert(accountsDb, accountData);
      const account = list.find(a => a.get('id') === accountData.id);
      expect(list).to.include(account);
    });
    it('new account object is seeded with data', function () {
      const list = accounts.insert(accountsDb, accountData);
      const account = list.find(a => a.get('id') === accountData.id);
      expect(account.get('name')).to.equal(accountData.name);
      expect(account.get('type')).to.equal(accountData.type);
      expect(account.get('on_budget')).to.equal(accountData.on_budget);
      expect(account.get('closed')).to.equal(accountData.closed);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const account = accountsDb.last().set('name', 'wat');
      const list = accounts.update(accountsDb, account);
      expect(list).not.to.equal(accountsDb);
    });
    it('new db includes updated account', function () {
      const account = accountsDb.last().set('name', 'wat');
      const list = accounts.update(accountsDb, account);
      const newAccount = list.find(a => a.get('id') === account.get('id'));
      expect(list).to.include(newAccount);
    });
    it('accounts list in new db does not increase in size', function () {
      const account = accountsDb.last().set('name', 'wat');
      const list = accounts.update(accountsDb, account);
      expect(list).to.have.size(accountsDb.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const account = accountsDb.last();
      const list = accounts.remove(accountsDb, account);
      expect(list).not.to.equal(accountsDb);
    });
    it('new db does not include account', function () {
      const account = accountsDb.last();
      const list = accounts.remove(accountsDb, account);
      expect(list).not.to.include(account);
    });
    it('accounts list in new db decreases in size by one', function () {
      const account = accountsDb.last();
      const list = accounts.remove(accountsDb, account);
      expect(list).to.have.size(accountsDb.size - 1);
    });
  });
});
