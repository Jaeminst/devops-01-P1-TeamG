'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('./create'))
  fastify.register(require('./read'))
  fastify.register(require('./update'))
  fastify.register(require('./delete'))
}