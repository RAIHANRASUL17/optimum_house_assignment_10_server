const express = require('express')
const app = express()
const port = process.env.PORT || 7000
// cors
const cors= require('cors');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Assignment 10 is Running')
})
// to get restaurant data
const restaurant= require('./data/restaurant.json')
app.get('/restaurant', (req, res)=>{
    res.send(restaurant)
})
// to get specific restaurant data
app.get("/restaurant/:id", (req, res)=>{
    const id =req.params.id;
    const selectedData= restaurant.find(n => n.id === id);
    res.send(selectedData)
})
// to mealDb
const mealDb= require("./data/mealDb.json")
app.get("/mealDb", (req, res)=>{
    res.send(mealDb)
})
// to get specific mealDb data
app.get("/mealDb/:id", (req, res)=>{
    const id= req.params.id;
    const selectedMeal= mealDb.find( n => n.id === id);
    res.send(selectedMeal)
})
app.listen(port, () => {
  console.log(`check api in assignment-10=> ${port}`)
})




// https://assignment-10-server-raihanrasul17.vercel.app/