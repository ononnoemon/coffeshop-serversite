const express = require('express')
const cors = require('cors')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json())

console.log(process.env.DB_USER)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qnflgjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database=client.db('coffees')
    const usersCollection=database.collection('coffee')

    app.post('/coffees',async (req,res) => {
        const coffee=req.body
          const result=await usersCollection.insertOne(coffee)
          res.send(result)
    })

    app.get('/coffees',async (req,res) => {
        const cursor=usersCollection.find()
        const result=await cursor.toArray()
        res.send(result)
    })
   
    app.delete('/coffees/:id',async(req,res)=>{
        const id=req.params.id
        const query={_id:new ObjectId(id)}
        const result=await usersCollection.deleteOne(query)
        res.send(result)
    })

    app.get('/coffees/:id',async (req,res) => {
        const id=req.params.id
        const quer={_id:new ObjectId(id)}
        const result=await usersCollection.findOne(quer)
        res.send(result)
    })
    
    app.put('/coffees/:id',async (req,res) => {
      const id=req.params.id
      const coffee=req.body
      const filter={_id:new ObjectId(id)}
      const option={upsert:true}
      const updatedUser={
        $set:{
        name:coffee.name,
        supplier:coffee.supplier,
        category:coffee.category,
        quantity:coffee.quantity,
        detailts:coffee.detailts,
         photo:coffee.photo   
      }
      }
      const result=await usersCollection.updateOne(filter,updatedUser,option)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  //  await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello Second Server!')
  })
  
  app.listen(port, () => {
    console.log(`Second Server app listening on port ${port}`)
  })
  