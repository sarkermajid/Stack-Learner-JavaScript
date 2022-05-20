// multidimentional array

var array = [
    [11,22,33,44],
    [44,55,66,77],
    [88,99,00,23]
]

console.log(array);
console.log(array[1][2]);
console.log(array[2][3]);

for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}

// tow dimentional array in loop

for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
        console.log('index of',i,':',array[i][j]);
    }
}

// three dimentional array ex :

// for(var i = 0; i < array2.length; i++){
//     for(var j = 0; j < array2[i].length; j++){
//         for(var k = 0; k < array2[i][j].length; k++){
//             console.log('index number of',i,':',array2[i],[j][k]);
//         }
//     }
// }