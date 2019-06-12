const express = require('express')
const router = express.Router()
const Login = require('../models/login')


//login

router.post('/login',(req,res)=>{
   // db
   res.send("hello")
})
router.post('/register', async (req,res)=>{
  // db
 // res.send("hello")
 // validaton  and

 const login = new Login({
  email: req.body.email,
  password: req.body.password
})
try {
  const logindata = await login.save()
  res.status(201).json(logindata)
} catch (err) {
  res.status(400).json({ message: err.message })
}
})

router.get('/logout',(req,res)=>{
  // db
  res.send("hello")
})

router.post('/settings',(req,res)=>{
  // db
  res.send("hello")
})

module.exports =router;