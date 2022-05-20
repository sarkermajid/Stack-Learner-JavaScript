// Inner function(nasted function) --> function er vitore function k inner function bole.

function introduce(greet,name){
    function sayHi(){
        console.log(greet,name);
    }
    sayHi();
}
introduce('Good Morning','Sarker Majid');