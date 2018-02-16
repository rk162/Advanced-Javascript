// let sort=function(cb){
//     this.names=['Name4','Name3','Name1','Name2'];
//     setTimeout(()=>{
//         cb(this.names.sort())
//     },1000)

// }
// sort((sortedData)=>{
// console.log(sortedData);
// })
// console.log('Hello Im executed First');




let sort1 = function() {
    return new Promise((resolve, reject) => {
        // this.names = ['Name4', 'Name3', 'Name1', 'Name2'];
        if (this.names) {
            setTimeout(() => {
                resolve(this.names.sort())
            }, 0)
        } else {
            reject(new Error("Array is Empty"))
                // throw new Error('Array is Empty')
        }
    })
}

let p = sort1();
p.then((sortedList) => console.log(sortedList))
p.catch((reason) => console.log(reason))
console.log('Hello Im executed First');