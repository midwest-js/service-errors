'use strict';

const _ = require('lodash');

const formatQuery = require('midwest/middleware/format-query');
const paginate = require('midwest/middleware/paginate');
const rest = require('midwest/middleware/rest');

const ErrorModel = require('./model');

function removeQuery(req, res, next) {
  ErrorModel.remove(_.omit(req.query, 'limit', 'sort', 'page'), (err) => {
    if (err) return next(err);

    res.status(204).locals.ok = true;

    next();
  });
}

module.exports = Object.assign(rest(ErrorModel), {
  formatQuery: formatQuery(['sort', 'limit', 'page', 'status']),
  paginate: paginate(ErrorModel, 200),
  removeQuery,
});
