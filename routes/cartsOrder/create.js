'use strict'

const {createOrder} = require('../../model')
const {readProduct} = require('../../model')
const products = require('../products')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
 
    const reqOrder = request.body
    // const orderQty = reqOrder.qty
    // const readProductsInfo = await readProduct(this.mongo, reqOrder.products)
    // const productPrice = readProductsInfo.price
    // const totalAmount = orderQty * productsPrice
    // const reqSummary = readProductsInfo.name
    // const orderProducts = []
    const arryProducts = reqOrder.carts
    // const arryProductsId = ''
    // const arryProductsQty = ''
    // const arryProductsInfo = ''
    for (let i = 0; i <= products.length; i++) {
      const arryProductsId = arryProducts[i]
      // arryproductID.push(arryProductsId.productId)

      console.log(arryProductsId)
      const arryProductsQty = arryProducts[i]
      // arryproductQty.push(arryProductsQty.qty)
      arryProductsInfo.push(arryProductsId)
      // pushProductInfo = reqOrder.carts[i].productId, reqOrder.carts[i].qty
      // orderProducts.push(arryProductsId)
    }
    // const testee = reqOrder.carts
    // console.log(arryProductsInfo)
    
    // const newOrder = {
    //   userId: reqOrder.userId,
    //   products: fjkldjlk<배열로 샬라샬라
    //   reqOrder.productId,
    //   orderSummary: reqSummary,
    //   totalAmount: totalAmount
    // }
    
    // reqOrder = {
    //   "userId": 'rjewkljfklw'
    //   "carts": [{
    //     "userId": "6220d89ea6e069ba6fcfe39c",
    //     "productId": "622198479f7ff16f7a25cc05",
    //     "qty": 1
    //   },
    //   {
    //     "userId": "6220d89ea6e069ba6fcfe39d",
    //     "productId": "6221998e9f7ff16f7a25cc06",
    //     "qty": 1
    //   },
    //   {
    //     "userId": "6220d89ea6e069ba6fcfe39e",
    //     "productId": "62219a199f7ff16f7a25cc07",
    //     "qty": 1
    //   }]
    // }

    // console.log(totalAmount)

    // var pTest = [{
    //   productId: '622198479f7ff16f7a25cc05',
    //   qty: 1
    // }]

    // const newOrder = {
    //   userId: "y240e2qqqqe0624a6fce21a1",
    //   products: pTest,
      //   productId: '622198479f7ff16f7a25cc05',
      //   qty: 1
      // },
      //   productId: '6221998e9f7ff16f7a25cc06',
      //   qty: 3
      // },
      //   productId: '62219a199f7ff16f7a25cc07',
      //   qty: 5
      // }],
      // orderSummary: 'gold_ring, silver_ring, bronze_ring',
      // totalAmount: 65000

    // const result = await createOrder(this.mongo, newOrder)
    // const orderId = result.insertedId
    
    
    
    reply
    .code(201)
    .header('Content-Type', 'application/json')
    .send(/* { orderId: orderId } */)
  })
}