'use strict'

const {readCarts} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    // const reqCart = request.body
    // const cartQty = reqCart.qty
    // const readProductInfo = await readProduct(this.mongo, reqCart.productId)

    // authorization hard coding
    const userAuthorization = request.raw.rawHeaders[1]
    const user1 = `Basic d29hbHMxMjQ1QGdtYWlsLmNvbToxMjM0`
    const user2 = `Basic d2lzZS5hcmNuQGdtYWlsLmNvbToxMjM0NTY3OA==`
    const user3 = `Basic ZWthbmZxb3JAZGF1bS5uZXQ6MTIzNDEyMzQ=`

    if (userAuthorization === user1) {
      var authorUserId = '62231a1aa5173f4665a52685'
    } //이재민
    if (userAuthorization === user2) {
      var authorUserId = '62231a1aa5173f4665a52685'
    } //임지윤
    if (userAuthorization === user3) {
      var authorUserId = '62231cb5a5173f4665a52687'
    } //백다물

    // var testauth = { authorization: request.raw.rawHeaders[1] }
    const result = await readCarts(this.mongo, authorUserId)
    // console.log("++++++++++++++ request ++++++++++++++\n")
    // console.log(testauth)
    // console.log("-------------------------------------\n")


    // const resCarts = {
    //   userId: reqOrder.userId,
    //   productId: reqOrder.productId,
    //   orderSummary: reqSummary,
    //   totalAmount: totalAmount
    // }

    //  [
    //     {
    //       "userId": "6220d89ea6e069ba6fcfe39c",
    //       "product": [{
    //           "id": "a220e2qeqqe069ba6fcfe391",
    //           "name": "GoldRing",
    //           "price": 20000,
    //           "stock": 50,
    //           "img": "https://media.thejewellershop.com/images/products/VR0209_01.jpg",
    //       "qty": 1
    //       }]
    //     }
    //   ]

   reply
  .code(200)
  .header('Content-Type', 'application/json')
  .send(result);
  

  })
}