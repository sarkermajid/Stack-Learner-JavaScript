function add(a,b){
    var result = a + b;
    console.log(result);
}
add(50,30);

function sub(a,b){
    var result = a-b;
    console.log(result);
}
sub(20,5);



arr1 = [2,5,7];
arr2 = [1,3,6];
arr3 = [4,7,9];
// 3ta arrayr jogful nirnoy koro ?

var sum1 = 0
for(var i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
}
console.log(sum1);

var sum2 = 0;
for(var i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
}
console.log(sum2);

var sum3 = 0;
for(var i = 0; i < arr3.length; i++){
    sum3 += arr3[i]
}
console.log(sum3);



// ai vabe korte gele proti ta arrayr jonno bar bar code lekha lagtese amra function use kore amn ekta formate create krbo jeno koyek lak array ek e code dia kaj korano jay.

function sumOfArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)

// its working.