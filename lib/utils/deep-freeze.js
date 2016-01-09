import { isPlainObject, mapValues } from 'lodash';

export default function deepFreeze(obj) {
  return Object.freeze(mapValues(obj, val => {
    return isPlainObject(val) ? deepFreeze(val) : val;
  }));
}
