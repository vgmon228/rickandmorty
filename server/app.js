if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
  }
const express = require('express')
const app = express()
const db = require('./db')
const { ObjectId } = require("mongodb");
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/location', async (req, res) => {
  let data = await db.collection('location').find({}).toArray()
  console.log(data)
  res.status(200).json(data)
})

app.post('/location', async (req, res) => {
    let {location} = req.body
    try {
        let findData = await db.collection('location').findOne({location:location})
        console.log(findData)
        if(!findData){
            let createLocation = await db.collection('location').insertOne({
                _id: new ObjectId(),
                location: location
            })
            res.status(201).json(createLocation)
        }
        res.status(400).json({message:'Duplicate Location'})
    } catch (error) {
        console.log(error)
    }
  })

app.put('/location', async (req,res)=>{
    let {char,image,location} = req.body
    try {
        let findData = await db.collection('location').findOne({location:location})
        if(!findData){
            let createLocation = await db.collection('location').insertOne({
                _id: new ObjectId(),
                location: location
            })
        }
        findData = await db.collection('location').findOne({location:location})
        let findChar = await db.collection('location').findOne({char:char})
        console.log(char,image,location)
        if(findData){
            if(!findChar){
                let update = await db.collection('location').updateOne({
                    _id:findData._id,
                },
                    {
                        $push:{
                            char:char,
                            image:image
                        }
                    }
                )
                res.status(201).json(update)
            }
            res.status(400).json({message:'Duplicate Character'})
        }
        res.status(404).json({message:'Add Location First'})
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = app