const { parse, stringify } = JSON;

/**
 * Serializes an object as a string
 *
 * While the strings are technically just JSON, that's not an implementation
 * detail that should be relied on.
 *
 * @param {Object} obj
 * @returns {String}
 */
export function serialize(obj) {
  return stringify(obj);
}

/**
 * Deserializes a string as an object
 *
 * This should only be used to deserialize strings created via the sibling
 * serialize function. While the strings are technically just JSON, that's not
 * an implementation detail that should be relied on.
 *
 * @param {String} str
 * @returns {Object}
 */
export function deserialize(str) {
  return parse(str);
}
