const { MongoClient, ServerApiVersion } = require('mongodb');
let uri = process.env.MONGO_URI
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client.db('Mostrans')