var EventEmitter = require('events');
class Counter extends EventEmitter{
    constructor(){
        super();
    }
 

readCounter(c){
    var count=0;
   // let self=this;
//   var a=setTimeout(()=>{
//     this.emit('start');
//   },9);
//     var t=setInterval(()=>{ 
        
//         this.emit('data',++count)
//         if(count===c){
//         this.emit('done',count);
//        clearInterval(t);

//     }
// },10);

    var t=setTimeout(()=>{ 
        this.emit('start');
        if(err){
            return this.emit('error',err);
        }
        for(count;count<=c;count++){
        this.emit('data',count)
        
        if(count===c){
        this.emit('done',count);} 
    }
},10);
}
}

let eventEmitter= new Counter();
eventEmitter.readCounter(20)
eventEmitter.on('start',()=>console.log('started'))
eventEmitter.on('data',(contents)=>console.log('Receiving Data '+contents))
eventEmitter.on('error',(err)=>console.error(err))
eventEmitter.on('done',(msg)=>console.log('done '+msg))