const mongoose = require('mongoose');
const express=reqruire("express");
const app = express();



mongoose.connect('mongodb://localhost:27017/Hello', {useNewUrlParser: true});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.l


