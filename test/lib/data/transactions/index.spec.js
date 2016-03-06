'use strict';

import * as transactions from '../../../../lib/data/transactions';
import account from '../../../support/fixtures/account';
import transactionData from '../../../support/fixtures/transaction-data';
import db from '../../../support/fixtures/db';

describe('data/transactions', function () {
  let transactionsDb;
  beforeEach(function () {
    transactionsDb = db.get('transactions');
  });

  describe('#completed()', function () {
    it('returns all completed transactions', function () {
      const list = transactions.completed(transactionsDb);
      expect(list).to.have.size(2);
      expect(list.last().get('completed')).to.equal(true);
    });
  });

  describe('#completedForAccount()', function () {
    it('returns all completed transactions for an account', function () {
      const list = transactions.completedForAccount(transactionsDb, account);
      expect(list).to.have.size(1);
      expect(list.last().get('completed')).to.equal(true);
      expect(list.last().get('account')).to.equal(account.get('id'));
    });
  });

  describe('#forAccount()', function () {
    it('returns all transactions for an account', function () {
      const list = transactions.forAccount(transactionsDb, account);
      expect(list).to.have.size(2);
      expect(list.last().get('completed')).to.equal(true);
      expect(list.last().get('account')).to.equal(account.get('id'));
    });
  });

  describe('#insert()', function () {
    it('returns new db', function() {
      const list = transactions.insert(transactionsDb, transactionData);
      expect(list).not.to.equal(transactionsDb);
    });
    it('returned db includes new transaction', function () {
      const list = transactions.insert(transactionsDb, transactionData);
      const transaction = list.find(t => t.get('id') === transactionData.id);
      expect(list).to.include(transaction);
    });
    it('also returns the new transaction object', function () {
      const list = transactions.insert(transactionsDb, transactionData);
      const transaction = list.find(t => t.get('id') === transactionData.id);
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
  });

  describe('#update()', function () {
    it('returns new db', function() {
      const transaction = transactionsDb.last().set('memo', 'wat');
      const list = transactions.update(transactionsDb, transaction);
      expect(list).not.to.equal(transactionsDb);
    });
    it('new db includes updated transaction', function () {
      const transaction = transactionsDb.last().set('memo', 'wat');
      const list = transactions.update(transactionsDb, transaction);
      const newTransaction = list.find(t => t.get('id') === transaction.get('id'));
      expect(list).to.include(newTransaction);
    });
    it('transactions list in new db does not increase in size', function () {
      const transaction = transactionsDb.last().set('memo', 'wat');
      const list = transactions.update(transactionsDb, transaction);
      expect(list).to.have.size(transactionsDb.size);
    });
  });

  describe('#remove()', function () {
    it('returns new db', function () {
      const transaction = transactionsDb.last();
      const list = transactions.remove(transactionsDb, transaction);
      expect(list).not.to.equal(transactionsDb);
    });
    it('new db does not include transaction', function () {
      const transaction = transactionsDb.last();
      const list = transactions.remove(transactionsDb, transaction);
      expect(list).not.to.include(transaction);
    });
    it('transactions list in new db decreases in size by one', function () {
      const transaction = transactionsDb.last();
      const list = transactions.remove(transactionsDb, transaction);
      expect(list).to.have.size(transactionsDb.size - 1);
    });
  });
});
