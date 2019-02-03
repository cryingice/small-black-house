const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const mogoose = require('mongoose')
// const route = require('./routes')
const app = new express()

app.use('/user',userRouter)

// const user = mogoose.model('user',new mogoose.Schema({
//     user:{type:String,require:true},
//     age:{type:Number,require:true},
// }))

// user.create({
//     user:'cryingice'
// },{$set:{
//     age:26
// }},(err,doc)=>{
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// })
app.use(logger('dev'))

app.use(bodyParser.urlencoded({extends:true}))
app.use(bodyParser.json())

const DB_URL = 'mongodb://localhost:27017/my-mogodb';
mogoose.connect(DB_URL)
mogoose.connection.on('connected',()=>{
    console.log('mogo connect success');
})
// app.use('api/',router)
// app.get('/api/data',(req,res)=>{
//     user.findOne({user:'cryingice'},(err,doc)=>{
//         res.json(doc)
//     })
// })
app.listen(3003,()=>{
    console.log('node server is listening 3003');
})