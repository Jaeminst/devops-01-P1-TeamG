'use strict'

const {readProducts} = require('../../model')
const {readProduct} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const result = await readProducts(this.mongo)

    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send(result);

  })

  fastify.get('/:id', async function (request, reply) {
      console.log("++++++++++++++이거++++++++++++++\n")
      console.log(requst)
      console.log("--------------------------------\n")
      // const result = await readProduct(this.mongo, requst.params.id)

      reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result);

  })
}