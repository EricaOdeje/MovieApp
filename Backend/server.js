const express = require('express')
const app = express()
const port = 4000
    
{/* CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. 
This is done by bypassing the Access-Control-Allow-Origin headers, 
which specify which origins can access the API.*/}
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
 next();
 });

{/* Here we are configuring express to use body-parser as middle-ware. 
The body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. */}
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


{/* I needed to do include mongoose in my project and open a connection to my database. I got it from https://mongoosejs.com/docs/index.html. */}
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@advdatabases.zmkn2kd.mongodb.net/?retryWrites=true&w=majority');

}

{/* I created a data model using Schema Interface to represent the movie object we have been creating and listing in the labs to-date.  */}
const movieSchema = new mongoose.Schema({
  title:String,
  poster:String,
  director:String
})

{/* I use the Schema to construct a database model */}
const movieModel = mongoose.model('movie' ,movieSchema);

{/* I was able to delete a movie by ID */}
app.delete('/api/movies/:id', async (req, res)=>{
  console.log("Delete: "+req.params.id);
  let movie =  await movieModel.findByIdAndDelete(req.params.id);
  res.send(movie);
})

{/* I added a post method on the Express Server that will console log both the title, 
author and cover of the object passed up by the React App */}
app.post('/api/movies', (req, res) => {
    console.log(req.body);

    {/* I wrote a method that will write data to your database. I used the create() function to create new documents. */}
    movieModel.create({
      title:req.body.title,
      poster:req.body.cover,
      director:req.body.director
    })
    .then(
      () =>{res.send("Data Received!")}
    )
    .catch(
      () =>{res.send("Data NOT Received!")}
    )
  })

{/* I wrote a method that reads all data from the database and gets it to display on the react
app. */}
app.get('/api/movies', async(req, res) => {
  let movies = await movieModel.find({});
  console.log(movies);
  res.json(movies);
})

{/* I wrote a method that reads a movie by id from my database in my server */}
app.get('/api/movies/:id' ,async(req,res)=>{
  console.log(req.params.id);
  let movie = await movieModel.findById({_id:req.params.id})
  res.send(movie);
})

{/* I wrote a method to update a movie by ID in the database. */}
app.put('/api/movie/:identifier', async(req, res) =>{
  console.log("Edit: "+req.params.identifier)
  let movie = await movieModel.findByIdAndUpdate(req.params.identifier,req.body,{new:true});
  res.send(movie);
}) 


app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`)
})