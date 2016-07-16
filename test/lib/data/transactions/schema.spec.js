import { defaults } from 'lodash';
import * as schema from '../../../../lib/data/transactions/schema';
import accountFixture from '../../../support/fixtures/account';
import accountsFixture from '../../../support/fixtures/accounts';
import payees from '../../../support/fixtures/payees';
import transactionData, { requiredTransactionData } from '../../../support/fixtures/transaction-data';
import transactionFixture from '../../../support/fixtures/transaction';

describe('data/transactions/schema', function () {
  describe('#isInflow()', function () {
    it('returns true when amount is positive', function () {
      const updatedTransaction = transactionFixture.set('amount', 1);
      const flag = schema.isInflow(updatedTransaction);
      expect(flag).to.equal(true);
    });
    it('returns true when amount is 0 (zero)', function () {
      const updatedTransaction = transactionFixture.set('amount', 0);
      const flag = schema.isInflow(updatedTransaction);
      expect(flag).to.equal(true);
    });
    it('returns false when amount is negative', function () {
      const updatedTransaction = transactionFixture.set('amount', -1);
      const flag = schema.isInflow(updatedTransaction);
      expect(flag).to.equal(false);
    });
  });

  describe('#isOutflow()', function () {
    it('returns false when amount is positive', function () {
      const updatedTransaction = transactionFixture.set('amount', 1);
      const flag = schema.isOutflow(updatedTransaction);
      expect(flag).to.equal(false);
    });
    it('returns false when amount is 0 (zero)', function () {
      const updatedTransaction = transactionFixture.set('amount', 0);
      const flag = schema.isOutflow(updatedTransaction);
      expect(flag).to.equal(false);
    });
    it('returns true when amount is negative', function () {
      const updatedTransaction = transactionFixture.set('amount', -1);
      const flag = schema.isOutflow(updatedTransaction);
      expect(flag).to.equal(true);
    });
  });

  describe('#dollarAmount()', function () {
    it('returns the amount in dollars', function () {
      const updatedTransaction = transactionFixture.set('amount', 12345);
      const dollars = schema.dollarAmount(updatedTransaction);
      expect(dollars).to.equal('123.45');
    });
  });

  describe('#isCompleted()', function () {
    it('returns true when transaction is completed', function () {
      const updatedTransaction = transactionFixture.set('completed', true);
      const flag = schema.isCompleted(updatedTransaction);
      expect(flag).to.equal(true);
    });
    it('returns false when transaction is not completed', function () {
      const updatedTransaction = transactionFixture.set('completed', false);
      const flag = schema.isCompleted(updatedTransaction);
      expect(flag).to.equal(false);
    });
  });

  describe('#isPending()', function () {
    it('returns false when transaction is completed', function () {
      const updatedTransaction = transactionFixture.set('completed', true);
      const flag = schema.isPending(updatedTransaction);
      expect(flag).to.equal(false);
    });
    it('returns true when transaction is not completed', function () {
      const updatedTransaction = transactionFixture.set('completed', false);
      const flag = schema.isPending(updatedTransaction);
      expect(flag).to.equal(true);
    });
  });

  describe('#isForAccount()', function () {
    it('returns true when transaction belongs to account', function () {
      const updatedTransaction = transactionFixture.set('account', accountFixture.get('id'));
      const flag = schema.isForAccount(updatedTransaction, accountFixture);
      expect(flag).to.equal(true);
    });
    it('returns false when transaction belongs to a different account', function () {
      const updatedTransaction = transactionFixture.set('account', '1234567');
      const flag = schema.isForAccount(updatedTransaction, accountFixture);
      expect(flag).to.equal(false);
    });
    it('returns false when transaction has no account', function () {
      const updatedTransaction = transactionFixture.set('account', '');
      const flag = schema.isForAccount(updatedTransaction, accountFixture);
      expect(flag).to.equal(false);
    });
  });

  describe('#account()', function () {
    it('returns the account associated with this transaction', function () {
      const account = schema.account(accountsFixture, transactionFixture);
      expect(transactionFixture.get('account')).to.equal(account.get('id'));
    });
    it('returns undefined if transaction has no account', function () {
      const updatedTransaction = transactionFixture.set('account', '');
      const account = schema.account(accountsFixture, updatedTransaction);
      expect(account).to.equal(undefined);
    });
  });

  describe('#payee()', function () {
    it('returns the payee associated with this transaction', function () {
      const payee = schema.payee(payees, transactionFixture);
      expect(transactionFixture.get('payee')).to.equal(payee.get('id'));
    });
    it('returns undefined if transaction has no payee', function () {
      const updatedTransaction = transactionFixture.set('payee', '');
      const payee = schema.payee(payees, updatedTransaction);
      expect(payee).to.equal(undefined);
    });
  });

  describe('#cast()', function () {
    function callCastWith(overrides) {
      return schema.cast(defaults(overrides, transactionData));
    }

    it('returns immutable transaction', function () {
      const transaction = schema.cast(transactionData);
      expect(transaction).to.have.keys(schema.defaults);
    });
    it('transaction amount defaults to 0 if not given a value', function () {
      const transaction = schema.cast(requiredTransactionData);
      expect(transaction.get('amount')).to.equal(0);
    });
    it('transaction completed defaults to false if not given a value', function () {
      const transaction = schema.cast(requiredTransactionData);
      expect(transaction.get('completed')).to.equal(false);
    });
    it('allows overiding of defaults', function () {
      const overrides = {
        account: '123',
        payee: '345',
        date: '2016-01-02',
        memo: 'wat',
        check: '001',
        amount: 12345,
        completed: true,
      };
      const transaction = schema.cast(defaults(overrides, transactionData));
      expect(transaction.get('account')).to.equal(overrides.account);
      expect(transaction.get('payee')).to.equal(overrides.payee);
      expect(transaction.get('date')).to.equal(overrides.date);
      expect(transaction.get('memo')).to.equal(overrides.memo);
      expect(transaction.get('check')).to.equal(overrides.check);
      expect(transaction.get('amount')).to.equal(overrides.amount);
      expect(transaction.get('completed')).to.equal(overrides.completed);
    });
    it('throws if given invalid id', function () {
      expect(() => callCastWith({ id: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ id: '' })).to.throw(Error);
    });
    it('throws if given invalid account', function () {
      expect(() => callCastWith({ account: 123 })).to.throw(Error);
    });
    it('throws if given invalid payee', function () {
      expect(() => callCastWith({ payee: 345 })).to.throw(Error);
    });
    it('throws if given invalid date', function () {
      expect(() => callCastWith({ date: 1 })).to.throw(TypeError);
    });
    it('throws if given invalid memo', function () {
      expect(() => callCastWith({ memo: 1 })).to.throw(TypeError);
    });
    it('throws if given invalid check', function () {
      expect(() => callCastWith({ check: 1 })).to.throw(TypeError);
    });
    it('throws if given invalid amount', function () {
      expect(() => callCastWith({ amount: '1' })).to.throw(TypeError);
      expect(() => callCastWith({ amount: 1.1 })).to.throw(TypeError);
    });
    it('throws if given invalid completed', function () {
      expect(() => callCastWith({ completed: 'true' })).to.throw(TypeError);
      expect(() => callCastWith({ completed: 1 })).to.throw(TypeError);
    });
  });
});
