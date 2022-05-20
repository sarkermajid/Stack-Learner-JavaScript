// callback function

function sample(a,b){
    var c = a + b;
    var d = a - b;
    var result = sum(c,d);
    return result;
}

function sum(a,b){
    return a + b;
}

console.log(sample(5,8));

// funciton argument er moto pass kore callback function

function sample2(a,b,cb){
    var c = a + b;
    var d = a - b;
    var result = cb(c,d);
    return result;
}

function sum2(a,b){
    return a + b;
}

var result2 = sample(5,8,sum2)
console.log(result2);

// callback function argument er moto pass kore bt sum er jonno alada function create na kore direct function use kore perameter r modde.... js function er ekta boisisto holo jokon icha je kno jaigay function create kra jabe.

function sample3(a,b,cb){
    var c = a + b;
    var d = a - b;
    var result = cb(c,d);
    return result;
}

var result3 = sample3(5,8, function(c,d){
    return c + d;
})
console.log(result3);

var result4 = sample3(5,8, function(c,d){
    return c - d;
})

console.log(result4);

var result5 = sample3(5,8,function(c,d){
    return c * d;
})
console.log(result5);

var result6 = sample3(5,8,function(c,d){
    return c / d;
})
console.log(result6);