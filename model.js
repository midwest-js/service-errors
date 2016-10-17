'use strict';

const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
  body: {},
  // non-standard, MDN
  columnNumber: Number,
  // non-standard, TCB
  dateCreated: { type: Date, default: Date.now },
  // non-standard, TCB, Microsoft uses (has used?) is similarly to message
  description: String,
  // non-standard, TCB
  details: {},
  // non-standard, MDN
  fileName: String,
  // non-standard, TCB
  ip: String,
  // non-standard, MDN
  lineNumber: Number,
  // non-standard, TCB
  method: String,
  // standard
  message: String,
  // standard
  name: String,
  // non-standard, TCB - mainly used for 404
  path: String,
  // non-standard, TCB
  query: {},
  // non-standard, TCB
  session: {},
  // non-standard, MDN
  stack: String,
  // non-standard, TCB
  status: Number,
  // non-standard, TCB - usually the same as message
  statusText: String,
  // non-standard, TCB
  user: String,
  // non-standard, TCB
  userAgent: String,
  // non-standard, TCB
  xhr: Boolean,
});

module.exports = mongoose.model('Error', ErrorSchema);
