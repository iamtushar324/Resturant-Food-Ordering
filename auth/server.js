const app = require('express')()
const mongoose = require('mongoose')


app.get('/api/auth',(req,res)=>{
res.send('iiii')
})

app.listen(3333,()=>{
console.log("Server started at 3333")
})
