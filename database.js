// go  to  mongoDB and create a free cluster
// get the connection string 
const {MongoClient} = require('mongodb');

const URI="mongodb+srv://yadavravin69:Ra12345@cluster0.rf4fz.mongodb.net/"

const client =new MongoClient(URI)

const dbName="HelloWorld"

async function main(){
    await client.connect()
    console.log("Connected successfully to server")
    const db=client.db(dbName)
    const collection=db.collection("documents")

    // read
    const findResult=await collection.find({}).toArray()
    console.log('Found documents =>',findResult)

    return 'done.'
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close())