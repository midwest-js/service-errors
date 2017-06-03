'use strict'

const _ = require('lodash')
const factory = require('midwest/factories/rest-handlers')
const sql = require('easy-postgres/sql-helpers')
const resolveCache = require('./resolve-cache')

const columns = [
  'id',
  'body',
  'columnNumber',
  'createdAt',
  'description',
  'details',
  'filename',
  'ip',
  'lineNumber',
  'method',
  'message',
  'name',
  'path',
  'query',
  'session',
  'stack',
  'status',
  'statusText',
  'user',
  'userAgent',
  'xhr'
]

module.exports = _.memoize((config) => {
  function removeByQuery (json, client = config.db) {
    let query = 'DELETE FROM errors'
    let values

    if (Object.keys(json).length) {
      query += ` WHERE ${sql.where(json)}`
      values = sql.values(json)
    }

    query += ';'

    return client.query(query, values).then((result) => {
      if (config.emitter) config.emitter.emit('db', 'errors')

      return result.rowCount
    })
  }

  return Object.assign(factory({
    db: config.db,
    emitter: config.emitter,
    table: 'errors',
    columns
  }), {
    removeByQuery
  })
}, resolveCache)
