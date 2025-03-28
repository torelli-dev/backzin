const ser = require('express')
const serverApp = ser()
const port = 4000 

serverApp.get('/back',(req,res)=>{
    res.send("Funcionou essa bomba!")
})

serverApp.listen(port, ()=>{
    console.log ('server funfou!')
})