const { Duplex } = require('stream');



const inoutStream = new Duplex({
    write(chunk,encoding,cb){
        console.log(chunk.toString());
      //  cb()
    },
  read(size) {
   
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    }
  })

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);

// process.on('exit', () => {
//   console.error(
//     `\n\ncurrentCharCode is ${inStream.currentCharCode}`
//   );
// });
// process.stdout.on('error', process.exit);