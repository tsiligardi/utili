const express= require("express")
const app= new express()
const fetch=require("node-fetch")

app.get("/",(req,res)=>{
    fetch(/*link*/)
    .then(response =>response.json())
    .then(response=>{
        //callback sulla response
    })
    .catch(err =>console.log(err))
})

app.get("/route/:id",(req,res)=>{
    const id=req.params.id //indirizzo dinamico a seconda dell'id
    fetch( /*link*/)
    .then(response=>response.json())
    .then(response=>{
        //callback su response
        })
    .catch(err=>console.log(err))

    app.listen(8080,()=>console.log('server listening on port 8080'))