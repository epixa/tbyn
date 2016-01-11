'use strict';

import Promise from 'bluebird';
import chai from 'chai';
import rfr from 'rfr';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import immutableChai from './support/helpers/immutable-chai';

Promise.longStackTraces();

chai.use(sinonChai);
chai.use(immutableChai);

global.expect = chai.expect;
global.sinon = sinon;
global.requireFromRoot = rfr;
