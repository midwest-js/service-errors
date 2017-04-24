'use strict';

const { create } = require('../handlers');

module.exports = function postgresStore(error) {
  create(error).catch((err) => {
    console.error('ERROR WRITING TO DATABASE');
    console.error(err);
    console.error(err.errors);
    console.error('ORIGINAL ERROR');
    console.error(error);
  });
};
