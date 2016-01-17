'use strict';

import { trim } from 'lodash';
import { Map as immutableMap } from 'immutable';

export const defaults = Object.freeze({
  id: "",
  name: ""
});

export function cast(payee) {
  payee = immutableMap(defaults).merge(payee);

  assertValidId(payee.get('id'));
  assertValidName(payee.get('name'));

  return payee;
}

export function assertValidId(id) {
  const type = typeof id;
  if (type !== 'string') {
    throw new TypeError(`Payee id must be a string, ${type} given`);
  }
  if (trim(id) === "") {
    throw new Error(`Payee id cannot be empty`);
  }
}

export function assertValidName(name) {
  const type = typeof name;
  if (type !== 'string') {
    throw new TypeError(`Payee name must be a string, ${type} given`);
  }
  if (trim(name) === "") {
    throw new Error(`Payee name cannot be empty`);
  }
}
