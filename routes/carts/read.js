'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

 const responseData =
 [
    {
      "userId": "6220d89ea6e069ba6fcfe39c",
      "product": [{
          "id": "a220e2qeqqe069ba6fcfe391",
          "name": "GoldRing",
          "price": 20000,
          "stock": 50,
          "img": "https://media.thejewellershop.com/images/products/VR0209_01.jpg",
      "qty": 1
      }]
    }
  ]

   reply
  .code(200)
  .header('Content-Type', 'application/json')
  .send(responseData);
  

  })
'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

 const responseData =
 [
    {
      "userId": "6220d89ea6e069ba6fcfe39c",
      "product": [{
          "id": "a220e2qeqqe069ba6fcfe391",
          "name": "GoldRing",
          "price": 20000,
          "stock": 50,
          "img": "https://media.thejewellershop.com/images/products/VR0209_01.jpg",
      "qty": 1
      }]
    }
  ]

   reply
  .code(200)
  .header('Content-Type', 'application/json')
  .send(responseData);
  

  })
}}