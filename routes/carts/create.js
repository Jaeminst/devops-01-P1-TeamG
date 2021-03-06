'use strict'

const {createCart} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
 
    const newCart = request.body  
    const result = await createCart(this.mongo, newCart )
    const CartId = result.insertedId
    
    //console.log("+++++++++++++이거 확인+++++++++++", resault.insertedId) 
    if (!CartId) {
      return reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send({ 
        Error: "Not Found"
       })
    }
    
    reply
    .code(201)
    .header('Content-Type', 'application/json')
    .send({ CartId: CartId })
  })
}