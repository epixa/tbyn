'use strict';

const serializer = requireFromRoot('lib/storage/serializer');

describe('storage/serializer', function () {
  describe('#serialize()', function () {
    const { serialize } = serializer;

    it('returns string', function () {
      const value = serialize({});
      expect(value).to.be.a('string');
    });
  });

  describe('#deserialize()', function () {
    const { deserialize, serialize } = serializer;

    it('deserializes string as a native javascript value', function () {
      const value = deserialize('{}');
      expect(value).to.be.an('object');
    });
    it('turns strings returned by serialize() into objects', function() {
      const str = serialize({ foo: 'bar', baz: [1] });
      const value = deserialize(str);
      expect(value.foo).to.equal('bar');
      expect(value.baz).to.be.an('array');
      expect(value.baz[0]).to.equal(1);
    });
  });
});
