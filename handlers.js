'use strict';

const factory = require('midwest/factories/handlers');
const sql = require('easy-pg/sql-helpers');

const config = require('./config');

const columns = ['id', 'body', 'columnNumber', 'dateCreated', 'description', 'details', 'filename', 'ip', 'lineNumber', 'method', 'message', 'name', 'path', 'query', 'session', 'stack', 'status', 'statusText', 'user', 'userAgent', 'xhr'];

function removeByQuery(json, client = config.db) {
  let query = 'DELETE FROM errors';
  let values;

  if (Object.keys(json).length) {
    query += ` WHERE ${sql.where(json)}`;
    values = sql.values(json);
  }

  query += ';';

  return client.query(query, values).then((result) => {
    if (config.emitter) config.emitter.emit('db', 'errors');

    return result.rowCount;
  });
}

module.exports = Object.assign(factory({
  db: config.db,
  emitter: config.emitter,
  table: 'errors',
  columns,
}), {
  removeByQuery,
});
