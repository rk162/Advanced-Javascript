let add=(x,y)=>{
    if(typeof x!== 'number')
    throw new TypeError ('not numeric');
    if(typeof y!== 'number')
    throw new TypeError ('not numeric');
    return x+y;
}
try{
    console.log(add(4,5));
    console.log(add(4,'Hello'));
}catch(e){
     console.log(e);
}