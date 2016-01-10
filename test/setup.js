'use strict';

const chai = require('chai');
const rfr = require('rfr');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
global.requireFromRoot = rfr;
