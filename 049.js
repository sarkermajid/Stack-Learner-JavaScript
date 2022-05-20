var arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.join('  '));
console.log(arr.fill(0));

var array1=[1,2,5,8,9];
var array2=[12,2,7,9,11];
console.log(array1.concat(array2));

console.log(Array.isArray(array2));

var a = [3,5,7,9];
var b = Array.from(a);   // a array r man b array te rakha hoise bt b array change korle o a array r man change hoy nai,
b[0] = 10;
console.log(a);
console.log(b);