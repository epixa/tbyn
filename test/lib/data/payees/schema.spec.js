import { defaults } from 'lodash';
import * as schema from '../../../../lib/data/payees/schema';
import payeeData from '../../../support/fixtures/payee-data';

describe('data/payees/schema', function () {
  describe('#cast()', function () {
    function callCastWith(overrides) {
      return schema.cast(defaults(overrides, payeeData));
    }

    it('returns immutable payee', function () {
      const payee = schema.cast(payeeData);
      expect(payee).to.have.keys(schema.defaults);
    });
    it('throws if given invalid id', function () {
      expect(() => callCastWith({ id: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ id: '' })).to.throw(Error);
    });
    it('throws if given invalid name', function () {
      expect(() => callCastWith({ name: 1 })).to.throw(TypeError);
      expect(() => callCastWith({ name: '' })).to.throw(Error);
    });
  });
});
