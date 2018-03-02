const express= require('express');
const aboutpage= require('./pages/about');
const homepage= require('./pages/home'); 
const app=express();
//http://localhost:3001
app.get('/',(req,res)=>{
    res.json({"id":1,"currentdate":new Date()})
})

//http://localhost:3001/data/rajat/21
app.get('/data/:name/:age',(req,res)=>{
    res.json({"id":req.params['name'],
"age":req.params['age']})
})

app.get('/home',homepage.home)
app.get('/about',aboutpage.about)

app.listen(3001,()=>console.log('server started on 3001'));