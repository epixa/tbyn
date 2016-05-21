'use strict';

import Promise from 'bluebird';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme';
import { jsdom } from 'jsdom';
import { pickBy } from 'lodash';

Promise.longStackTraces();

chai.use(sinonChai);
chai.use(chaiImmutable);
chai.use(chaiEnzyme);

global.expect = chai.expect;
global.sinon = sinon;

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };
Object.assign(
  global,
  pickBy(global.window, (val, key) => typeof global[key] === 'undefined')
);
