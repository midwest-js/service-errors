'use strict'

const { isAdmin } = require('express-module-membership/passport/authorization-middleware')

const mw = require('./middleware')

module.exports = [
  [ '/api/errors/', 'get', [ isAdmin, mw.formatQuery, mw.paginate, mw.find ]],
  [ '/api/errors/:id', 'get', [ isAdmin, mw.findById ]],
  [ '/api/errors/:id', 'delete', [ isAdmin, mw.remove ]],
  [ '/api/errors/', 'delete', [ isAdmin, mw.formatQuery, mw.removeQuery ]],
]
