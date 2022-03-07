'use strict'

const {createOrder} = require('../../model')
const {readProduct} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
 
    const reqOrder = request.body
    const orderQty = reqOrder.qty
    const readProductInfo = await readProduct(this.mongo, reqOrder.productId)
    const productPrice = readProductInfo.price
    const totalAmount = orderQty * productPrice
    const reqSummary = readProductInfo.name

    const newOrder = {
      userId: reqOrder.userId,
      productId: reqOrder.productId,
      orderSummary: reqSummary,
      totalAmount: totalAmount
    }
    // console.log(totalAmount)
    const result = await createOrder(this.mongo, newOrder)
    const orderId = result.insertedId
    
    
    if (!orderId) {
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
    .send({ orderId: orderId })
  })
}