'use strict'

const {readOrders} = require('../../model')
const {readOrder} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const result = await readOrders(this.mongo)

    if (!result) {
      return reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send({
        Error: "Not Found"
      })
    }
    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send(result);
  })

  fastify.get('/:_id', async function (request, reply) {
      const result = await readOrder(this.mongo, request.params._id)

      if (!result) {
        return reply
        .code(404)
        .header('Content-Type', 'application/json')
        .send({
          Error: "Not Found"
        })
      }
      reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result);
  })
}