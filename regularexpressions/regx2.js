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
            
// let re=/^s/i            // ^ starts with
// let re=/nitro$/i        // $ ends with
// let re=/n.tro$/i         // . one character can come 
// let re=/n*tro$/i        // * any no of char can be there
// let re=/sapi?en?t/i    // p?  p is optional

// Character Sets
// let re= /sa[pi]en?t/i       // [pi] matches either p or i but not both p and i

// let re=/[^sa]pien?t/i       //[^sa] neither s nor a nor sa should come

// let re=/[A-Z]pien?t/         //between range of A to Z
// let re=/Sap[A-Za-z]{2,4}t/i    // in the range of 2 to 8 from A to Z or a-z
// let re= /^[A-Za-z]{3,6}t/i         // 3 to 6 characters before t should come
let re1=/Hello/i;
let rel2=/^([0-9]x){3,4}$/          // no from 0-9 followed by x should repeat 3 or 4 times
  // Assertions                                   // if no $ will take any range greedy
let re3=/x(?=y)/                     // match x only if it is followed by y
let re4=/x(?!y)/                    //match x only if it is not followed by y

// Shorthand Character Classes
let re5=/\w/                    // Match word Char  (alphanumeric or underscore)
let re6=/\w+/                    // Match 1 or more Char  /\w*/ matches with spaces also
let re7=/\W/                     // Match non-word characters
let re8=/\d/                     // Match atleast one digit
let re9=/\D/                     // Match atleast one non-digit characters
let re10=/\s/                    // Match atleast one whitespace
let re11=/\S/                    // Match atleast one non-whitespace 
let re12=/^Sap\b/i                // Searches for the exact word (word-boundary)
let re13=/^\wSap\b/i
let re14=/^\w\Sap\b\s*ient$/i

let email=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-]+).([a-zA-Z]{2,5})$/
// Metacharacters.reTest(email,'ritesh.kumar88@gmail.com');

let phone=/^(\W?\d{2,3}?[-. ])?(\d{3,4}?[-. ])?\d{7,8}$/
// Metacharacters.reTest(phone,'+91-0124-4448888');

let url=/^(https?:\/\/)([a-zA-z0-9]+.)?([a-zA-Z0-9]+.)?([a-zA-Z0-9]+.)([a-zA-Z]{2,5})$/
Metacharacters.reTest(url,'https://peopleportal2.sapient.com');