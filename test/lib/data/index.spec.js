'use strict';

import * as accounts from '../../../lib/data/accounts';
import db from '../../support/fixtures/db';

describe('data/accounts', function () {
  describe('#all()', function () {
    it('returns immutable list of all accounts from db', function () {
      const list = accounts.all(db);
      expect(list).to.have.size(2);
    });
  });

  describe('#onBudget()', function () {

  });

  describe('#offBudget()', function () {

  });

  describe('#open()', function () {

  });

  describe('#closed()', function () {

  });

  describe('#insert()', function () {

  });

  describe('#update()', function () {

  });

  describe('#delete()', function () {

  });
});
