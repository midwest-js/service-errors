'use strict';

const _ = require('lodash');

const tests = {
  db: (value) => {
    const keys = ['query', 'connect', 'begin'];

    return keys.every((key) => _.has(value, key));
  },
};

const config = require('./config-base.js');
const errored = require('ok')(tests)(config);

if (errored.length) {
  throw new Error(`Configuration is invalid: ${errored.join(', ')}`);
}

if (!Object.isFrozen(config)) {
  throw new Error('Configuration is not frozen');
}

module.exports = config;
