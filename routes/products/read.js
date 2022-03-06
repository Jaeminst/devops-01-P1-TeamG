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

  fastify.get('/:_id', async function (request, reply) {
    //   const testresult = request.params._id
    //   console.log("++++++++++++++이거++++++++++++++\n")
    //   console.log(testresult)
    //   console.log("--------------------------------\n")
      const result = await readProduct(this.mongo, request.params._id)

      reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result);

  })
}