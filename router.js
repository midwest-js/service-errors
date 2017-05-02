'use strict';

const router = new (require('express')).Router();

const mw = require('./middleware');

router.route('/')
  .get(mw.getAll)
  .get(mw.formatQuery, mw.paginate, mw.find)
  .delete(mw.formatQuery, mw.removeByQuery);

router.route('/:id')
  .get(mw.findById)
  .delete(mw.remove);

module.exports = router;
