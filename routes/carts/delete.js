'use strict'

const {deleteCart} = require('../../model')
const {readCart} = require('../../model')
const {readProduct} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.delete('/', async function (request, reply) {
    const deleteCartId = request.body.cartId
    const deleteCartInfo = await readCart(this.mongo, deleteCartId) 
    const readProductInfo = await readProduct(this.mongo, deleteCartInfo.productId)
    const deleteSingleCart = await deleteCart(this.mongo, deleteCartId) 
    const result = { 
      // cartId: deleteCartId,
      userId: deleteCartInfo.userId,
      product: readProductInfo,
      qty: deleteCartInfo.qty
    }


    // console.log("++++++++++++++이거++++++++++++++\n")
    // console.log({ cartId: deleteCartId,
    //   userId: deleteCartInfo.userId,
    //   product: readProductInfo,
    //   qty: deleteCartInfo.qty
    //  })
    // console.log({ userId: deleteCartInfo.userId })
    // console.log({ product: readProductInfo })
    // console.log({ qty: deleteCartInfo.qty })
    // console.log("--------------------------------\n")

    
    
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
    // if (result != )

    if (!readProductInfo) {
      return reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send({ 
        product: null,
        ok: 1
      })
    }

    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send(result)
  })
}