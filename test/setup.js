'use strict';

import Promise from 'bluebird';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme';

Promise.longStackTraces();

chai.use(sinonChai);
chai.use(chaiImmutable);
chai.use(chaiEnzyme);

global.expect = chai.expect;
global.sinon = sinon;
