'use strict'

const {changeQty} = require('../../model')
const {readCart} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.patch('/', async function (request, reply) {
    //const responseData =
    // const updateCartId = { _id: request.body.cartId }
    const updateCartQty = { qty: request.body.qty }

    const result = await changeQty(this.mongo, request.body.cartId, updateCartQty) 
    const resultQty = await readCart(this.mongo, request.body.cartId)
    
    // console.log("++++++++++++++이거++++++++++++++\n")
    // console.log( updateCartId ) 
    // console.log( updateCartQty )
    // console.log({ result })
    // console.log("--------------------------------\n")

    // const result = await changeQty(this.mongo, updateCartId, updateCartQty) 

    // {
    //   "cart": {
    //       "id" : "a220e2qeqqe069ba6fcfe391",
    //       "qty": 1
    //   }
    // }

    if (!request.body.cartId) {
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
    .send({ qty: resultQty.qty })
  

  })
}