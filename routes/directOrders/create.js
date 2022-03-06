'use strict'

const {createOrders} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
 
    const newCart = request.body  
    const result = await createOrders(this.mongo, newCart )
    const CartId = result.insertedId
    
    //console.log("+++++++++++++이거 확인+++++++++++", resault.insertedId) 
    
    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send({ CartId: CartId })
  })
}