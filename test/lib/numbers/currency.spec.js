import * as currency from '../../../lib/numbers/currency';

describe('numbers/currency', function () {
  describe('#formatCurrency()', function () {
    const { formatCurrency } = currency;

    it('does not prefixes with dollar sign', function () {
      const value = formatCurrency(5);
      expect(value).not.to.match(/^\$/);
    });

    it('assumes input is in cents', function () {
      const value = formatCurrency(125);
      expect(value).to.equal('1.25');
    });

    it('formats high dollar amounts with commas', function () {
      const value = formatCurrency(782849505);
      expect(value).to.equal('7,828,495.05');
    });
  });

  describe('#formatCurrencyWithDollarSign()', function () {
    const { formatCurrencyWithDollarSign } = currency;

    it('prefixes with dollar sign', function () {
      const value = formatCurrencyWithDollarSign(5);
      expect(value).to.match(/^\$/);
    });

    it('assumes input is in cents', function () {
      const value = formatCurrencyWithDollarSign(125);
      expect(value).to.contain('1.25');
    });

    it('formats high dollar amounts with commas', function () {
      const value = formatCurrencyWithDollarSign(782849505);
      expect(value).to.contain('7,828,495.05');
    });
  });
});
