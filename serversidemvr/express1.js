const express= require('express');
const session=require('express-session');
const aboutpage= require('./pages/about');
const homepage= require('./pages/home'); 
const app=express();

let authenticate=(req,res,next)=>{
    if(req.session&&req.session.user==='any'&&req.session.admin)
    return next();
    res.sendStatus(401);
}

// Connect The Session Middleware with express router

app.use(session({
    secret:'2C44-4D44-WppQ38S',
    resave:true,
    saveUninitialized:false,
    rolling:true
}))

//http://localhost:3001
app.get('/',(req,res)=>{
    res.json({"id":1,"currentdate":new Date()})
})

//http://localhost:3001/data/rajat/21
app.get('/data/:name/:age',(req,res)=>{
    res.json({"id":req.params['name'],
"age":req.params['age']})
})                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                   
app.get('/login',function(req,res){
	if(!req.query.username || !req.query.password){
		res.send('login Failed');
		
	}else if(req.query.username ==='any' && req.query.password ==='anypassword'){
		req.session.user="any";
		req.session.admin=true;
		res.send('login is sucessfull')
	}
	else{
		res.send('login Failed');
	}
	
})
app.get('/logout',(req,res)=>{
	req.session.destroy();
	res.send('logged out')
});

app.get('/home',authenticate,homepage.home)
app.get('/about',authenticate,aboutpage.about)

app.listen(3001,()=>console.log('server started on 3001'));