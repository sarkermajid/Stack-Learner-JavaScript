// argument object

function test(a,b,c){
    console.log(arguments);
}
test(10,20,30); // test r vitor ja ase sob arguments


// amra jdi na jani je koyta arguments & perametter pass kora lagte pare se khetre aivabe kora jete pare ... vitore arguments use kore.

function sumOfAll(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}

sumOfAll(12,234,456,56,6,34,23,67,88);