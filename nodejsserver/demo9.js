const { Transform } = require('stream');



const inoutStream = new Transform({
    transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase());
       cb();
    }
  })

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);