'use strict'

const {deleteCart} = require('../../model')
const {readCart} = require('../../model')
const {readProduct} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.delete('/', async function (request, reply) {
    const deleteCartId = request.body.cartId
    const deleteCartInfo = await readCart (this.mongo, deleteCartId) 
    const readProductInfo = await readProduct (this.mongo, deleteCartInfo.productId)
    const deleteSingleCart = await deleteCart(this.mongo, deleteCartId) 
    
    //console.log("++++++++++++++이거++++++", readProductInfo) 
    
    
  // [
  //   {
  //     "userId": "6220d89ea6e069ba6fcfe39c",
  //     "product": [{
  //         "id": "a220e2qeqqe069ba6fcfe391",
  //         "name": "GoldRing",
  //         "price": 20000,
  //         "stock": 50,
  //         "img": "https://media.thejewellershop.com/images/products/VR0209_01.jpg",
  //     "qty": 1
  //     }]
  //   }
  // ]

   reply
  .code(200)
  .header('Content-Type', 'application/json')
  .send(deleteCartInfo)
  })
}