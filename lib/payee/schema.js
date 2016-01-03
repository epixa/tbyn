import { defaults, trim } from 'lodash';
import { fromJS } from 'immutable';

export function cast(payee) {
  payee = defaults(payee, {
    id: "",
    name: ""
  });

  payee = fromJS(payee);

  assertValidId(payee.id);
  assertValidName(payee.name);

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
