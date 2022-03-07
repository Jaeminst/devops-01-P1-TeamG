const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readCarts: async (mongo, id) => {
    const collection = mongo.db.collection('carts')
    const result = await collection.find({
      userId: id
    }).toArray()
    return result
  },

  readCart : async (mongo, id) => {
    const collection = mongo.db.collection('carts')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  readProducts: async (mongo) => {
    const collection = mongo.db.collection('products')
    const result = await collection.find({}).toArray()
    return result
  },

  readProduct : async (mongo, id) => {
    const collection = mongo.db.collection('products')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  readOrders: async (mongo) => {
    const collection = mongo.db.collection('orders')
    const result = await collection.find({}).toArray()
    return result
  },

  readOrder : async (mongo, id) => {
    const collection = mongo.db.collection('orders')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  createCart: async (mongo, body) => {
    const collection = mongo.db.collection('carts')
    const result = await collection.insertOne(body)
    return result
  },

  createOrder: async (mongo, body) => {
    const collection = mongo.db.collection('orders')

    const result = await collection.insertOne(body)
    return result
  },

  changeQty: async (mongo, id, body) => {
    const collection = mongo.db.collection('carts')

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set:body
    })
    return result
  },
  
  deleteCart: async (mongo, id) => {
    const collection = mongo.db.collection('carts')

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  },
 
}
