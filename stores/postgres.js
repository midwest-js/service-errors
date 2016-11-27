'use strict';

const _ = require('lodash');

const { create } = require('../handlers');

module.exports = function postgresStore(error) {
  create(error, (err) => {
    if (err) {
      console.error('ERROR WRITING TO DATABASE');
      console.error(err);
      console.error(err.errors);
      console.error('ORIGINAL ERROR');
      console.error(error);
    }
  });
};
