/* eslint-disable no-underscore-dangle */

import { Assertion } from 'chai';
import { List } from 'immutable';

export default function immutableChair(chai, utils) {
  Assertion.addProperty('list', assertList);

  Assertion.addChainableMethod('size', assertListSize, function () {
    utils.flag(this, 'list.size', true);
  });
}

function assertList() {
  this.assert(
    List.isList(this._obj),
    'expected #{this} to be a an immutable list',
    'expected #{this} to not be an immutable List'
  );
}

function assertListSize(size) {
  assertList.call(new Assertion(this._obj));

  new Assertion(this._obj.size).to.be.a('number');

  this.assert(
    this._obj.size === size,
    'expected #{this} to have a size of #{exp} but got #{act}',
    'expected #{this} to not have a size of #{act}',
    size,
    this._obj.size
  );
}
