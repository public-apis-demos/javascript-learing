const express = require('express')

const router = express.Router();


router.get('/',(req,res)=>{
  //res.send("hello")
  res.render('index', { title: 'hello', message: 'ssss there!' })
})
router.post('/register',(req,res)=>{
  res.send("register")
  //data schema
  //validation
  // logic
})

router.post('/login',(req,res)=>{
  res.send("login")
})


router.get('/logout',(req,res)=>{
  res.send("register")
})


router.put('/settings',(req,res)=>{
  res.send("register")
})




module.exports =router;