'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

  return reply
  .code(200)
  .header('Content-Type', 'application/json')
  .send({ "carts": { 
    "id": "sjkfjlsjf3lkjfkl3jfkl"}
    });
  })
}