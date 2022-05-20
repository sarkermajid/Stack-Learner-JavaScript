// First Class Function
function add(a,b){
    return a+b;
}
// 1. A function can be stored in a variable.

var sum = add;
console.log(sum(20,30));

// 2. A function can be stored in an Array.

var arr = Array();
arr.push(add);
console.log(arr);
console.log(arr[0](80,20));

// 3. A function can be stored in an object.

var obj = {
    sum : add
}
console.log(obj);
console.log(obj.sum(100,50));

// 4. We can create function as we need.

setTimeout(function () {

    console.log('I have created a function within setTimeOut funciton');
    
}, 2000);