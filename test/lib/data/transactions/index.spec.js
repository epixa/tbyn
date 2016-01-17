'use strict';

import * as transactions from '../../../../lib/data/transactions';
import account from '../../../support/fixtures/account';
import transactionData from '../../../support/fixtures/transaction-data';
import db from '../../../support/fixtures/db';

describe('data/transactions', function () {
  describe('#all()', function () {
    it('returns immutable list of all transactions from db', function () {
      const list = transactions.all(db);
      expect(list).to.have.size(3);
    });
  });

  describe('#completed()', function () {
    it('returns all completed transactions', function () {
      const list = transactions.completed(db);
      expect(list).to.have.size(2);
      expect(list.last().get('completed')).to.equal(true);
    });
  });

  describe('#completedForAccount()', function () {
    it('returns all completed transactions for an account', function () {
      const list = transactions.completedForAccount(db, account);
      expect(list).to.have.size(1);
      expect(list.last().get('completed')).to.equal(true);
      expect(list.last().get('account')).to.equal(account.get('id'));
    });
  });

  describe('#forAccount()', function () {
    it('returns all transactions for an account', function () {
      const list = transactions.forAccount(db, account);
      expect(list).to.have.size(2);
      expect(list.last().get('completed')).to.equal(true);
      expect(list.last().get('account')).to.equal(account.get('id'));
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const [ newDb ] = transactions.insert(db, transactionData);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the new transaction object', function () {
      const [ newDb, transaction ] = transactions.insert(db, transactionData);
      expect(transaction).not.to.equal(transactionData);
      expect(transaction.get('id')).to.equal(transactionData.id);
      expect(transaction.get('account')).to.equal(transactionData.account);
      expect(transaction.get('payee')).to.equal(transactionData.payee);
      expect(transaction.get('date')).to.equal(transactionData.date);
      expect(transaction.get('memo')).to.equal(transactionData.memo);
      expect(transaction.get('check')).to.equal(transactionData.check);
      expect(transaction.get('amount')).to.equal(transactionData.amount);
      expect(transaction.get('completed')).to.equal(transactionData.completed);
    });
    it('returned db includes new transaction', function () {
      const [ newDb, transaction ] = transactions.insert(db, transactionData);
      const list = transactions.all(newDb);
      expect(list).to.include(transaction);
    });
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const transaction = transactions.all(db).last().set('memo', 'wat');
      const [ newDb ] = transactions.update(db, transaction);
      expect(newDb).not.to.equal(db);
    });
    it('also returns the updated transaction object', function () {
      const transaction = transactions.all(db).last().set('memo', 'wat');
      const [ newDb, newTransaction ] = transactions.update(db, transaction);
      expect(transaction).to.equal(newTransaction);
    });
    it('new db includes updated transaction', function () {
      const transaction = transactions.all(db).last().set('memo', 'wat');
      const [ newDb, newTransaction ] = transactions.update(db, transaction);
      const newList = transactions.all(newDb);
      expect(newList).to.include(newTransaction);
    });
    it('transactions list in new db does not increase in size', function () {
      const oldList = transactions.all(db);
      const transaction = oldList.last().set('memo', 'wat');
      const [ newDb ] = transactions.update(db, transaction);
      const newList = transactions.all(newDb);
      expect(newList).to.have.size(oldList.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const transaction = transactions.all(db).last();
      const newDb = transactions.remove(db, transaction);
      expect(newDb).not.to.equal(db);
    });
    it('new db does not include transaction', function () {
      const transaction = transactions.all(db).last();
      const newDb = transactions.remove(db, transaction);
      const list = transactions.all(newDb);
      expect(newDb).not.to.include(transaction);
    });
    it('transactions list in new db decreases in size by one', function () {
      const oldList = transactions.all(db);
      const transaction = oldList.last();
      const newDb = transactions.remove(db, transaction);
      const newList = transactions.all(newDb);
      expect(newList).to.have.size(oldList.size - 1);
    });
  });
});
