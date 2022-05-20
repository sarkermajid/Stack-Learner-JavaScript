// expression
// ekta variable ar modde function rakha k function expression bole.
// adike function ar pore r kichu dey nai karon ata variable ar modde rakha hoise.. ai doroner function k annonymous function bole.

var addition = function (a,b){
    return a+b;
}

console.log(addition(20,30));
var another = addition;
console.log(another(5,5));
// ekta function k onno variable a rekhle o function ar mto call kora jay.

// annonymous function example :

setTimeout(function(){
    console.log('I will call after 5 Secound');
},5000);