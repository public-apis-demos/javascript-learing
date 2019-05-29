const express = require('express')
const mongoose=require("mongoose");
const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/sampleApp')

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const routers =require("./routes/regitster");
const registerSchema=require('./modules/register')

app.use('/register',routers)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))