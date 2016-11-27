'use strict';

const p = require('path');

const pg = require('pg');

const factory = require('midwest/factories/handlers');

const { values: generateValues, where } = require('midwest/util/sql');

const config = require(p.join(PWD, 'server/config/postgres'));

const columns = ['id', 'body', 'columnNumber', 'dateCreated', 'description', 'details', 'filename', 'ip', 'lineNumber', 'method', 'message', 'name', 'path', 'query', 'session', 'stack', 'status', 'statusText', 'user', 'userAgent', 'xhr'];

const pool = new pg.Pool(config);

function removeByQuery(json, cb) {
  let query = 'DELETE FROM errors';
  let values;

  if (Object.keys(json).length) {
    query += ` WHERE ${where(json)}`;
    values = generateValues(json);
  }

  query += ';';

  pool.query(query, values, (err, result) => {
    if (err) return cb(err);

    cb(null, result.rowCount);
  });
}

module.exports = Object.assign(factory('errors', columns, null, null), {
  removeByQuery,
});
