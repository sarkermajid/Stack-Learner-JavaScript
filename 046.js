// Search value in array

var array = [1,3,7,9,12,15,20,30,45,50];

var found = 20;
var isFound = false;

for(var i = 0; i < array.length; i++){
    if(array[i] == found){
        console.log('Data found at index number :',i);
        isFound = true;
        break;
    }
}
if(!isFound){
    console.log('Data not found');
}

var array2 = [2,5,9,67,43,67];

var found = 33;
var isFound = false;

for(var i = 0; i < array2.length; i++){
    if(array2[i]==found){
        console.log('data is found at index :',i);
        isFound = true;
        break;
    }
}
if(!isFound){
    console.log('data not found');
}