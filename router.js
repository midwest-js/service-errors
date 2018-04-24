'use strict'

const _ = require('lodash')
const express = require('express')
const resolver = require('deep-equal-resolver')()

module.exports = _.memoize((config) => {
  const router = new express.Router()
  const mw = require('./middleware')(config)

  router.route('/')
    .get(mw.getAll)
    .get(mw.formatQuery, mw.paginate, mw.find)
    .delete(mw.formatQuery, mw.removeByQuery)

  router.route('/:id')
    .get(mw.findById)
    .delete(mw.remove)

  return router
}, resolver)
