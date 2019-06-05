const express = require('express')
const mongoose=require("mongoose");
var morgan = require('morgan')
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

const port = 4000
mongoose.connect('mongodb://localhost:27017/sampleApp')

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const routers =require("./routes/regitster");
const registerSchema=require('./models/register')

app.use(morgan('dev'))
app.use('/',routers)
app.use('/register',registerSchema)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))