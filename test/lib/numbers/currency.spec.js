import * as currency from '../../../lib/numbers/currency';

describe('numbers/currency', function () {
  describe('#formatAsDollars()', function () {
    const { formatAsDollars } = currency;

    it('prefixes with dollar sign', function () {
      const value = formatAsDollars(5);
      expect(value).to.match(/^\$/);
    });

    it('assumes input is in cents', function () {
      const value = formatAsDollars(125);
      expect(value).to.contain('1.25');
    });

    it('formats high dollar amounts with commas', function () {
      const value = formatAsDollars(782849505);
      expect(value).to.contain('7,828,495.05');
    });
  });
});
