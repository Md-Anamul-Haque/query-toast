
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./query-toast.cjs.production.min.js')
} else {
  module.exports = require('./query-toast.cjs.development.js')
}
