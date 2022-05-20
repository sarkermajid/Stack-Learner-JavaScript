// Function
function functionName(){
    console.log('This is a function');
}
function add(){
    var a = 10;
    var b = 20;
    console.log(a+b);
}

functionName();
add();

for ( var i = 0; i < 10; i++){    // loop er maddome o function call kora jabe.
    functionName();
}

// function invoking = function call kora.