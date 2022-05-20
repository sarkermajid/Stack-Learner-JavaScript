// Traverse Array

var array = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(var i = 0; i < array.length; i++){
    array[i] = array[i] + 2;                // sob gula man a 2 kore add hobe.
    console.log(array[i])
}

for(var i = 0; i < array.length; i++){
    if(array[i]%2==0){
        console.log(array[i]);
    }
}

var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum);