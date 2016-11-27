'use strict';

const Model = require('./mongodb-model');

module.exports = function mongodbStore(error) {
  Model.create(error, (err) => {
    // TODO handle errors in error handler better
    if (err) {
      console.error('ERROR WRITING TO DATABASE');
      console.error(err);
      console.error(err.errors);
      console.error('ORIGINAL ERROR');
      console.error(error);
    }
  });
};
