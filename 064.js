// return

function sumOfAll(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sumOfAll(1,2,3,4,5,6,7,8,9,10));

var result = sumOfAll(1,2,3,4,5,6,7,8,9,10);
console.log(result);

// reture always function declaration a last a kra lagbe, return kora mane code ai porjonto e.. er pore  kno code thakle o r kaj korbe nah.

// another example

function person(name,email,phone,profession,address){
    return {
        name : name,
        email : email,
        phone : phone,
        profession : profession,
        address : address
    }
}

var information = person('Md Majidur Rahman Sarker','majidursarkar333@gmail.com','01727258083','Software Engineer','77 Maniknagar,Dhaka - 1203');

console.log(information);