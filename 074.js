var arr = [1,2,3,4,5]

var sum = 0
arr.forEach(function(value,index,arr){
    //console.log(value,index,arr);
    sum += value;
})
console.log(sum);

// make foreach function

function sarkerMajidForEach(arr,cb){
    for(var i = 0; i < arr.length; i++){
        cb(arr[i],i,arr);
    }
}

var sum2 = 0
sarkerMajidForEach(arr,function(value,index,arr){
    console.log(value,index,arr);
    sum2 += value;
})
console.log(sum2);

// array er value 5 kore barbe eta amader create kora foreach function dia korbo.


sarkerMajidForEach(arr,function(value,index,arr){
    arr[index] += value + 5;
})
console.log(arr);