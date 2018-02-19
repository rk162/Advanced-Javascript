let re;
re= /nitro/ig;
console.log(typeof re)
console.log(re instanceof RegExp)

console.log(re.source)
const result= re.exec('sapient nitro');
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

const result= re.test('sapient Nitro');
console.log(result)

const str= 'sapient nitro';
const result1= str.search(re);
console.log(result1);