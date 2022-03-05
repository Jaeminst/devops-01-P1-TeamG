const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)
    const result = await collection.find({}).toArray()
    return result
  },

  readCarts: async (mongo) => {
    const collection = mongo.db.collection('carts')
    const result = await collection.find({}).toArray()
    const testCollection = mongo.db.collection('products')
    console.log ("++++++++++++++여기 보자 ++++++++++++", testCollection)
    return result
  },

  readOne: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  readCart : async (mongo, id) => {
    const collection = mongo.db.collection('carts')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  readProduct : async (mongo, id) => {
    const collection = mongo.db.collection('products')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },


  createOne: async (mongo, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)

    const result = await collection.insertOne(body)
    return result
  },

  createCart: async (mongo, body) => {
    const collection = mongo.db.collection('carts')
    console.log( "+++++++++이거확인+++++++", collection)
    const result = await collection.insertOne(body)
    return result
  },

  updateOne: async (mongo, id, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
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
  

  deleteOne: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
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
