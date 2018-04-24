'use strict'

const _ = require('lodash')
const resolver = require('deep-equal-resolver')()

module.exports = _.memoize((config) => {
  const { create } = require('../handlers')(config)

  return function postgresStore (error) {
    return create(error).catch((err) => {
      console.error('ERROR WRITING TO DATABASE')
      console.error(err)
      console.error(err.errors)
      console.error('ORIGINAL ERROR')
      console.error(error)
    })
  }
}, resolver)
