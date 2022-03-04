'use strict'

module.exports = async function (fastify, opts) {
  fastify.patch('/', async function (request, reply) {
  //const responseData =
 [
    {
      "cart": [{
          "id" : "a220e2qeqqe069ba6fcfe391",
          "qty": 1
      }]
    }
  ]

   reply
  .code(200)
  .header('Content-Type', 'application/json')
  .send({"qty" : 1 })
  

  })
}