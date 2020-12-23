const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./Routes/user');
const app= express()
const PORT =4000;
mongoose.connect("mongodb://localhost:27017/project", { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:true})
    .then(() => { console.log("Connected mongoose") })
    .catch(() => { console.log("nahi zala re kahi tari chuklay") })

app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)



app.listen(PORT,()=>{
console.log(`connected to ${PORT}  successsfully`)
})