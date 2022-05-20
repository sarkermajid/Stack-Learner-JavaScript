// reverse javascript array

var array = [1,2,3,4,5,6,7];

for(var i = 0; i < array.length/2; i++){
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i ] = temp;
}
console.log(array);

// reverse method call kore

var array2 = [11,22,33,44,55];
console.log(array2.reverse());