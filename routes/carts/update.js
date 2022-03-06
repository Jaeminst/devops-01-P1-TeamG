'use strict'

const {changeQty} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.patch('/', async function (request, reply) {
    //const responseData =
    // const updateCartId = { _id: request.body.cartId }
    const updateCartQty = { qty: request.body.qty }

    const result = await changeQty(this.mongo, request.body.cartId, updateCartQty) 
    
    console.log("++++++++++++++이거++++++++++++++\n")
    // console.log( updateCartId ) 
    // console.log( updateCartQty )
    console.log({ result })
    console.log("--------------------------------\n")

    // const result = await changeQty(this.mongo, updateCartId, updateCartQty) 

    // {
    //   "cart": {
    //       "id" : "a220e2qeqqe069ba6fcfe391",
    //       "qty": 1
    //   }
    // }

    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send()
  

  })
}