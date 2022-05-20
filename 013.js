//  Type conversion

var a = '1000';
var b = 10;

console.log(Number.parseInt(a)); 
console.log(b.toString());

console.log(String(Infinity)); // string a convert hoise

console.log(Boolean(Infinity)); // true hobe
console.log(Boolean(-Infinity)); // true hobe

// falsy value in Boolean 

// 1. '' // empty string
// 2. null
// 3. naN
// 4. 0
// 5. undefine

console.log(Boolean(''));           //false
console.log(Boolean('majidur'));    //true
console.log(Boolean(undefined));    //false
console.log(Boolean(null));         //false
console.log(Boolean(0));            //false
console.log(Boolean(3));            //true
console.log(Boolean(NaN));          //false

var x = true;
console.log(x.toString());  // convert to string
console.log(Number.parseInt(x));  // boolean vlaue number a convert hobe nah