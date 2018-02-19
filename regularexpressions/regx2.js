class Metacharacters{
    static reTest(re,str){
        if(re.test(str)){
            console.log(`${str} matched ${re.source}`)
        }
        else{
            console.log(`${str} does not match ${re.source}`)
        }
    }
}

// let re=/^s/i
// let re=/nitro$/i
// let re=/n.tro$/i
// let re=/n*tro$/i
let re=/sapi?en?t/i
Metacharacters.reTest(re,'Sapet nitro');