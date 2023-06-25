//MongoDB 6.0
// const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://0.0.0.0:27017/";

//Mongoose 7.3.1
const mongoose = require('mongoose');

//Connect to Server - the path refer to the name of DB
mongoose.connect('mongodb://127.0.0.1:27017/personDB');

//Making schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Input your name!']
  },
  age: Number
})

//Making model -- collection
const Person = new mongoose.model('Person', personSchema);

//exp of construct new data
const opang = new Person({
  name: 'opang',
  age: 12
});
const putra = new Person({
  name: 'putra',
  age: 13
});
const kaisar = new Person({
  name: 'kaisar',
  age: 16
})

/* -------- Insert Data -------- */
// Person.insertMany([opang, putra, kaisar]) // Done!!!

/* -------- Find Method -------- */
Person.find().then((err, people) => {
  if (err) console.log(err)
  console.log(people)
})

/* -------- Find Name Method -------- */
// Person.find().then((people) => {
//   people.forEach(el => console.log(el.name))
// }).catch(err => console.log(err))

/* -------- Update Function -------- */
async function updatePerson(){
  await Person.updateOne({name: 'putra'}, {age: 14})
};

/* -------- Delete Function -------- */
async function deletePerson(value){
  await Person.deleteOne({name: value})
};



/* -------- Using MongoDB Native Driver -------- */

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     // create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     }

//     const options = {
//       sort: '1',
//       projection: {_id: 0, title: 1}
//     }

//     // const result = await haiku.insertOne(doc);
//     const showMovie = await haiku.findOne()
//     console.log(showMovie);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);