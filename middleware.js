'use strict';

const _ = require('lodash');

const formatQuery = require('midwest/factories/format-query');
const paginate = require('midwest/factories/paginate');
const factory = require('midwest/factories/rest');

const handlers = require('./handlers');

function removeByQuery(req, res, next) {
  handlers.removeByQuery(_.omit(req.query, 'limit', 'sort', 'page'), (err, count) => {
    if (err) return next(err);

    if (count) res.status(204);

    next();
  });
}

module.exports = Object.assign(factory({
  plural: 'errors',
  handlers: handlers,
}), {
  formatQuery: formatQuery(['sort', 'limit', 'page', 'status']),
  paginate: paginate(handlers.count, 200),
  removeByQuery,
});
