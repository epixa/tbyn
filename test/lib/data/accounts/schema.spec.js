import { defaults } from 'lodash';
import * as schema from '../../../../lib/data/accounts/schema';
import accountData, { requiredAccountData } from '../../../support/fixtures/account-data';
import accountFixture from '../../../support/fixtures/account';

describe('data/accounts/schema', function () {
  describe('#isOnBudget()', function () {
    it('returns true when account is on budget', function () {
      const updatedAccount = accountFixture.set('on_budget', true);
      const flag = schema.isOnBudget(updatedAccount);
      expect(flag).to.be.true;
    });
    it('returns false when account is not on budget', function () {
      const updatedAccount = accountFixture.set('on_budget', false);
      const flag = schema.isOnBudget(updatedAccount);
      expect(flag).to.be.false;
    });
  });

  describe('#isOffBudget()', function () {
    it('returns true when account is not on budget', function () {
      const updatedAccount = accountFixture.set('on_budget', false);
      const flag = schema.isOffBudget(updatedAccount);
      expect(flag).to.be.true;
    });
    it('returns false when account is on budget', function () {
      const updatedAccount = accountFixture.set('on_budget', true);
      const flag = schema.isOffBudget(updatedAccount);
      expect(flag).to.be.false;
    });
  });

  describe('#isOpen()', function () {
    it('returns true when account is not closed', function () {
      const updatedAccount = accountFixture.set('closed', false);
      const flag = schema.isOpen(updatedAccount);
      expect(flag).to.be.true;
    });
    it('returns false when account is closed', function () {
      const updatedAccount = accountFixture.set('closed', true);
      const flag = schema.isOpen(updatedAccount);
      expect(flag).to.be.false;
    });
  });

  describe('#isClosed()', function () {
    it('returns true when account is closed', function () {
      const updatedAccount = accountFixture.set('closed', true);
      const flag = schema.isClosed(updatedAccount);
      expect(flag).to.be.true;
    });
    it('returns false when account is not closed', function () {
      const updatedAccount = accountFixture.set('closed', false);
      const flag = schema.isClosed(updatedAccount);
      expect(flag).to.be.false;
    });
  });

  describe('#cast()', function () {
    function callCastWith(overrides) {
      return schema.cast(defaults(overrides, accountData));
    }

    it('returns immutable account', function () {
      const account = schema.cast(accountData);
      expect(account).to.have.keys(schema.defaults);
    });
    it('account closed defaults to false if not given a value', function () {
      const account = schema.cast(requiredAccountData);
      expect(account.get('closed')).to.be.false;
    });
    it('account on_budget defaults to true if not given a value', function () {
      const account = schema.cast(requiredAccountData);
      expect(account.get('on_budget')).to.be.true;
    });
    it('account type defaults to checking if not given a value', function () {
      const account = schema.cast(requiredAccountData);
      expect(account.get('type')).to.equal(schema.types.CHECKING);
    });
    it('allows overiding of defaults', function () {
      const overrides = {
        closed: true,
        on_budget: false,
        type: schema.types.SAVINGS,
      };
      const account = schema.cast(defaults(overrides, accountData));
      expect(account.get('closed')).to.equal(overrides.closed);
      expect(account.get('on_budget')).to.equal(overrides.on_budget);
      expect(account.get('type')).to.equal(overrides.type);
    });
    it('throws if given invalid id', function () {
      expect(() => callCastWith({ id: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ id: '' })).to.throw(Error);
    });
    it('throws if given invalid name', function () {
      expect(() => callCastWith({ name: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ name: '' })).to.throw(Error);
    });
    it('throws if given invalid type', function () {
      expect(() => callCastWith({ type: 'checkingx' })).to.throw(Error);
      expect(() => callCastWith({ type: '' })).to.throw(Error);
    });
    it('throws if given invalid on_budget', function () {
      expect(() => callCastWith({ on_budget: 'true' })).to.throw(TypeError);
      expect(() => callCastWith({ on_budget: 1 })).to.throw(TypeError);
    });
    it('throws if given invalid closed', function () {
      expect(() => callCastWith({ closed: 'false' })).to.throw(TypeError);
      expect(() => callCastWith({ closed: 0 })).to.throw(TypeError);
    });
  });
});
